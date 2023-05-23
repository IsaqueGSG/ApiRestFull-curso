import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

//Não deveriam existir
router.get('/', loginRequired, userController.index); //lista todos os usuarios
router.get('/:id', userController.show); //lista um usuario


router.post('/', userController.store);

//usuario so pode editar e excluir seus dados.
router.put('/:id', loginRequired, userController.update);
router.delete('/:id', loginRequired, userController.delete);


export default router;
