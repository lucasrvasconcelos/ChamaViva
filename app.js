import Express from "express";
import { engine } from 'express-handlebars';
import userRoutes from "./src/Routes/userRoutes.js";

//configuração express
const app = Express()
const port = process.env.PORT || 3000

//Configurando para que acesse o arquivo de rotas
app.use(userRoutes)

//Configuração paginas estáticas
app.use(Express.static("src/assets"))

//configuração handlebars
app.engine('handlebars', engine({defaultLayout: "main.handlebars"}));
app.set('view engine', 'handlebars');
app.set('views', 'views');
app.enable('view cache');

app.listen(port, () => {
    console.log("Conectado a porta " + port)
})