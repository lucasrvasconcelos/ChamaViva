import Express from "express";
import { engine } from 'express-handlebars';
import session from 'express-session';
import userRoutes from "./src/Routes/userRoutes.js";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//configuração express
const app = Express()
const port = process.env.PORT || 3000

//Configurações sessões
app.use(session({
    secret: 'c2h0a2m3a3v2i0v2a',
    resave: false,
    saveUninitialized: true
}));

 // Middleware para fazer o parsing do corpo como JSON
app.use(Express.json());

// Middleware para parsing de dados do formulário
app.use(Express.urlencoded({ extended: true }));

//Configurando para que acesse o arquivo de rotas
app.use(userRoutes)

//Configuração paginas estáticas
app.use(Express.static(path.join(__dirname, "src/assets")))



//configuração handlebars
app.engine('handlebars', engine({defaultLayout: "main.handlebars"}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.enable('view cache');

app.listen(port, () => {
    console.log("Conectado a porta " + port)
})