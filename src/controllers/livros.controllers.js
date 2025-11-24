
import {db} from "../config/db.js";

export async function  adicionarlivros (req,res){
    try {
        const {titulo, autor, descricao, disponivel} = req.body;
        if(!titulo || !autor || !descricao || !disponivel)
        return res.status(400).json({message: "Todos os campos são obrigatórios!"});
        await db.execute(
            "INSERT INTO livros (titulo, autor, descricao, disponivel) VALUES (?,?,?,?)",
            [titulo, autor, descricao, disponivel]
        );
        res.status(201).json({message: "Livro adicionado com sucesso!"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export async function listarlivros (req,res){
    try {
        const [rows] = await db.execute("SELECT * FROM livros");
        res.json(rows);
    } catch (error) {
        res.status(500).json({erro:error.message});
    }
    
};

export async function obterlivros (req,res){
    try {
        const [rows] = await db.execute("SELECT * FROM livros WHERE id = ?", [req.params.id]);
        if (rows.length === 0)
        return res.status(404).json({message: "Livro não encontrado!"});
        res.json (rows[0]);
    } catch (error) {
        res.status(500).json({erro: error.message});
    }
};

export async function atualizarlivros (req,res){
    try {
        const {titulo, autor, descricao, disponivel} = req.body;
        await db.execute(
            "UPDATE livros SET titulo = ?, autor = ?, descricao = ?, disponivel = ? WHERE id = ?",
            [titulo, autor, descricao, disponivel, req.params.id]
        );
        res.json({message: "Livro atualizado com sucesso!"});
    } catch (error) {
        res.status(500).json({erro: error.message});
    }
};

export async function deletarlivros (req,res){
    try {
        await db.execute("DELETE FROM livros WHERE id = ?", [req.params.id]);
        res.json({message: "Livro deletado com sucesso!"});
    } catch (error) {
        res.status(500).json({erro: error.message});
    }
};