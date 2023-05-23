import Aluno from '../models/Aluno'

class HomeController {
  async index(req, res) {

    const novoAluno = await Aluno.create({
      nome: 'isaque',
      sobrenome: 'goncalves',
      email: 'isaque@gmail.com',
      idade: 20,
      peso: 60,
      altura: 1.73
    })
    res.json({
      novoAluno
    });
  }
}

export default new HomeController();
