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

app.listen(8000, () => {
    console.log(`Servidor funcionando en http://localhost:8000/`);
})