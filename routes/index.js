import express from 'express';
import {paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViajes} from '../controllers/paginaControllers.js';
import {guardarTestimonial} from '../controllers/testimonialControllers.js'

const router = express.Router();

//req es lo que enviamos y res es lo que Express te envia
router.get('/inicio', paginaInicio);
router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViajes);
router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);


export default router;