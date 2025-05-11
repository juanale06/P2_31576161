import { Router } from 'express';
import path from 'path';
import ContactosController from '@controllers/controllers.js';

const router = Router();

router.get('/',ContactosController.index);
router.get('/admin/contacts',ContactosController.getAllContacts);
router.get('/payment',ContactosController.payment);
router.get('/getPayment',ContactosController.getPayment);
router.get('/pedir',ContactosController.pedir);
router.get('/info',ContactosController.info);
router.get('/inicio_sesion',ContactosController.inicio_sesion);
router.get('/instrumentos',ContactosController.instrumentos);
router.get('/registro',ContactosController.registro);

router.post('/contact/add',ContactosController.add);
router.post('/payment/add',ContactosController.paymentAdd);

export default router;