import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// import usuarioRoutes from "./routes/usuario.routes.js"
import livrosRoutes from "./routes/livros.routes.js"
// import avaliacoesRoutes from "./routes/avaliacoes.routes.js"
// ============================
//  Configuração do servidor
// ============================
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req,res)=>{
  res.send("API rodando com sucesso")
})

// app.use("/usuarios", usuarioRoutes)
app.use("/livros", livrosRoutes)

// ============================
//  Inicia o servidor
// ============================
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
console.log(`http://localhost:${PORT}`);