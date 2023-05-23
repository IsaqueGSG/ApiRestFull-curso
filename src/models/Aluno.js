import { Sequelize, Model } from "sequelize";

export default class Aluno extends Model{

    static init(sequelize){
        super.init({
            nome: {
              type: Sequelize.STRING,
              defaultValue: '',
              validate: {
                len: {
                  args: [3, 255],
                  msg: 'Campo nome deve ter entre 3 e 255 caracteres',
                }
              }
            },
            sobrenome:{
              type: Sequelize.STRING,
              defaultValue: '',
              validate: {
                len: {
                  args: [3, 255],
                  msg: 'Campo nome deve ter entre 3 e 255 caracteres',
                }
              }
            },
            email: {
              type: Sequelize.STRING,
              defaultValue: '',
              validate: {
                isEmail: {
                  msg: 'Email invalido',
                }
              }
            },
            altura: {
              type: Sequelize.FLOAT,
              defaultValue: 0,
              validate: {
                isFloat: {
                  msg: 'altura precisa ser um numero interio ou de ponto flutuante',
                }
              }
            },
            peso: {
              type: Sequelize.FLOAT,
              defaultValue: '',
              validate: {
                isFloat: {
                  msg: 'peso precisa ser um numero interio ou de ponto flutuante',
                }
              }
            },
        },
        {
            sequelize
        });
        return this;
    }

    static associate(models){
      this.hasMany(models.Foto, {foreignKey: 'aluno_id'});
    }
}