import express from "express"
import cors from "cors"
//importamos la conexion a la db
import db from "./database/db.js"
import dotenv from "dotenv"
import pedidosRoutes from "./routes/routes.js"


dotenv.config();

const app = express()
app.use(cors())
app.use(express.json());
app.use('/pedidos', pedidosRoutes)

try {
    await db.authenticate()
    console.log('Conexión exitosa');
} catch (error) {
    console.log(`El error de conexión es: ${error}`);
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}/`);
});