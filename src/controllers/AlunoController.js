import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  async index(req, res) {
    try{

      const alunos = await Aluno.findAll({
        attributes:['id','nome', 'sobrenome', 'email', 'altura', 'peso',],
        order: [ ['id', 'DESC'], [Foto, 'id', 'DESC'] ],
        include: {
          model: Foto,
          attributes: ['url','filename']
        }
      });
      if(!alunos){
        return res.status(400).json({
          errors: ['nao existe alunos']
        });
      }

      return res.json({alunos})

    }catch(e){
      return res.status(400).json({
        errors: e.message
      });
    }
  }

  async store(req, res) {
    try{
      const aluno = await Aluno.create(req.body);
      return res.json({aluno})
    }catch(e){
      return res.status(400).json({
        errors: e.message
      });
    }
  }

  async show(req, res) {

    try{
      const {id} = req.params;
      if(!id){
        return res.status(400).json({
          errors: ['faltando ID']
        });
      }

      const aluno = await Aluno.findByPk(id, {
        attributes:['id','nome', 'sobrenome', 'email', 'altura', 'peso'],
        order: [ ['id', 'DESC'], [Foto, 'id', 'DESC'] ],
        include: {
          model: Foto,
          attributes: ['filename']
        }
      });
      if(!aluno){
        return res.status(400).json({
          errors: ['aluno nao existe']
        });
      }

      return res.json({aluno})

    }catch(e){
      return res.status(400).json({
        errors: e.message
      });
    }
  }

  async delete(req, res) {
    try{
      const {id} = req.params.id;

      if(!id){
        return res.status(400).json({
          errors: ['faltando ID']
        });
      }

      const aluno = await Aluno.findByPk(id);
      if(!aluno){
        return res.status(400).json({
          errors: ['aluno nao existe']
        });
      }

      await aluno.destroy;
      return res.json({'deleted': true})

    }catch(e){
      return res.status(400).json({
        errors: e.message
      });
    }
  }

  async update(req, res) {
    try{
      const {id} = req.params;

      if(!id){
        return res.status(400).json({
          errors: ['faltando ID']
        });
      }

      const aluno = await Aluno.findByPk(id);
      if(!aluno){
        return res.status(400).json({
          errors: ['aluno nao existe']
        });
      }

      const alunoAtualizado = await aluno.update(req.body);
      return res.json({alunoAtualizado})

    }catch(e){
      return res.status(400).json({
        errors: e.message
      });
    }
  }
}

export default new AlunoController();
