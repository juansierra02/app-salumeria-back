import express from 'express';
import { getAllPedidos, getPedido, crearPedido, updatePedido, deletePedido } from '../controllers/PedidoController.js';
const router = express.Router();

router.get('/', getAllPedidos)
router.get('/:id', getPedido)
router.post('/', crearPedido)
router.put('/:id', updatePedido)
router.delete('/:id', deletePedido)

export default router;