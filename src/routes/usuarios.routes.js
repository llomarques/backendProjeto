import express from "express"
import{
    adicionarusuarios,
    listarUsuarios,
    obterusuario,
    atualizarusuario,
    deletarusuario
} from"../controllers/usuarios.controller.js"
const router = express.Router();

router.post("/", adicionarusuarios);
router.get("/", listarUsuarios);
router.get("/:id", obterusuario);
router.put("/:id", atualizarusuario);
router.delete("/:id", deletarusuario);
export default router;