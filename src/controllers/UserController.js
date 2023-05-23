import User from '../models/User';

class UserController {
  async store(req, res) {
    try{
      const novoUser = await User.create({
        nome: 'raquel',
        email: 'raquel@gmail.com',
        password: '123456'
      })
      const {id, nome, email } = novoUser ;
      return res.json({id, nome, email });
    }catch(e){
      return  res.status(400).json(e.errors);
    }
  }

  async index(req, res){
    try{
      const users = await User.findAll( {attributes: ['id', 'nome', 'email']});
      return res.json( users );
    }catch(e){
      return res.json( null );
    }
  }


  async show(req, res){
    try{
      const user = await User.findByPk(req.params.id);
      const {id, nome, email } = user ;
      return res.json( {id, nome, email } );
    }catch(e){
      return res.json( null );
    }
  }

  async update(req, res){
    try{
      const user = await User.findByPk(req.userId);
      if( !user ){
        return res.status(401).json({
          errors:['usuario nao existe']
        })
      }

      const update = await user.update(req.body)
      const {id, nome, email } = update ;
      return res.json({id, nome, email });
    }catch(e){
      return res.json( e.message );
    }
  }

  async delete(req, res){
    try{

      if( !req.params.id ){
        return res.status(401).json({
          errors:['id nao recebido']
        })
      }

      const user = await User.findByPk(req.params.id);
      if( !user ){
        return res.status(401).json({
          errors:['usuario nao existe']
        })
      }

      await user.destroy();
      return res.json( null );
    }catch(e){
      return res.json( e.message );
    }
  }

}

export default new UserController();
