import express from 'express';

import {
  listarRespostas,
  criarResposta,
  atualizarResposta,
  deletarResposta,
  buscarRespostaPorId,
  listarRespostasPorLocalizacao
} from '../controllers/resposta.controller.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Resposta:
 *       type: object
 *       required:
 *         - texto
 *         - localizacaoId
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único da resposta
 *         texto:
 *           type: string
 *           description: Texto da resposta
 *         localizacaoId:
 *           type: integer
 *           description: ID da localização relacionada
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Data de criação
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Data da última atualização
 */

/**
 * @swagger
 * /respostas:
 *   get:
 *     summary: Retorna todas as respostas
 *     tags: [Respostas]
 *     responses:
 *       200:
 *         description: Lista de respostas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Resposta'
 */
router.get('/', listarRespostas);

/**
 * @swagger
 * /respostas:
 *   post:
 *     summary: Cria uma nova resposta
 *     tags: [Respostas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - texto
 *               - localizacaoId
 *             properties:
 *               texto:
 *                 type: string
 *               localizacaoId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Resposta criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Resposta'
 *       400:
 *         description: Dados inválidos
 */
router.post('/', criarResposta);

/**
 * @swagger
 * /respostas/localizacao/{localizacaoId}:
 *   get:
 *     summary: Retorna respostas por localização
 *     tags: [Respostas]
 *     parameters:
 *       - in: path
 *         name: localizacaoId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da localização
 *     responses:
 *       200:
 *         description: Lista de respostas da localização
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Resposta'
 *       404:
 *         description: Localização não encontrada
 */
router.get('/localizacao/:localizacaoId', listarRespostasPorLocalizacao);

/**
 * @swagger
 * /respostas/{id}:
 *   get:
 *     summary: Retorna uma resposta pelo ID
 *     tags: [Respostas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da resposta
 *     responses:
 *       200:
 *         description: Detalhes da resposta
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Resposta'
 *       404:
 *         description: Resposta não encontrada
 */
router.get('/:id', buscarRespostaPorId);

/**
 * @swagger
 * /respostas/{id}:
 *   put:
 *     summary: Atualiza uma resposta
 *     tags: [Respostas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da resposta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               texto:
 *                 type: string
 *     responses:
 *       200:
 *         description: Resposta atualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Resposta'
 *       404:
 *         description: Resposta não encontrada
 */
router.put('/:id', atualizarResposta);

/**
 * @swagger
 * /respostas/{id}:
 *   delete:
 *     summary: Remove uma resposta
 *     tags: [Respostas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da resposta
 *     responses:
 *       204:
 *         description: Resposta removida
 *       404:
 *         description: Resposta não encontrada
 */
router.delete('/:id', deletarResposta);

export default router;
