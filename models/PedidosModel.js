//Importamos la conexion a la DB
import db from "../database/db.js";
//Importamos sequelize
import { DataTypes } from "sequelize";

const PedidosModel = db.define('pedidos',{
    nombre_cliente:{type: DataTypes.STRING},
    apellido_cliente:{type: DataTypes.STRING},
    numero_whatsapp:{type: DataTypes.STRING},
    calle_altura:{type: DataTypes.STRING},
    piso_puerta:{type: DataTypes.STRING},
    cant_chorizo_pollo:{type: DataTypes.NUMBER},
    cant_chorizo_cerdo:{type: DataTypes.NUMBER},
    cant_chuleta_ahumada:{type: DataTypes.NUMBER},
    cant_hueso_ahumado:{type: DataTypes.NUMBER},
    cant_bondiola_tender:{type: DataTypes.NUMBER},
    cant_pastrami:{type: DataTypes.NUMBER}
})

export default PedidosModel