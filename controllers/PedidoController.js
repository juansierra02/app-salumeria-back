//importamos el Modelo
import PedidoModel from "../models/PedidosModel.js";

/**Metodos del CRUD */
//Mostrar todos los registros
export const getAllPedidos = async (req,res) =>{
    try {

        const pedidos = await PedidoModel.findAll()
        res.json(pedidos)
    } catch (error) {
        res.json({menssage: error.menssage})
    }
}

//Mostrar un registro
export const getPedido = async (req,res) =>{
    try {
        const pedidos = await PedidoModel.findAll({
            where:{id: req.params.id}
        })
        res.json(pedidos[0])
    } catch (error) {
        res.json({menssage: error.menssage})
    }
}

//Crear un registro
export const crearPedido = async (req,res) =>{
    try {
        await PedidoModel.create(req.body)
        res.json({
            "menssage": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({menssage: error.menssage})
    }
}

//Actualizar un registro
export const updatePedido = async (req,res) =>{
    try {
        await PedidoModel.update(req.body, {
            where:{id: req.params.id}
        })
        res.json({
            "menssage": "¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json({menssage: error.menssage})
    }
}

//Eliminar un registro
export const deletePedido = async (req,res) =>{
    try {
        await PedidoModel.destroy({
            where:{id: req.params.id}
        })
        res.json({
            "menssage": "¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({menssage: error.menssage})
    }
}
