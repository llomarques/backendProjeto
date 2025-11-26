import express from "express";
import { db } from "../config/db.js";
import {
    listarReservas,
    criarReserva,
    deletarReserva,
    reservasAtivas,
    // confirmarEmailReserva

} from "../controllers/reservas.controllers.js";

const router = express.Router();

router.get("/", listarReservas);
router.post("/", criarReserva);
router.delete("/:id", deletarReserva);
router.get("/ativas", reservasAtivas);
// router.patch("/:id/confirmar-email", confirmarEmailReserva);

export default router;