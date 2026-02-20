import type { FastifyInstance } from 'fastify';
import { register } from './register.js';
import { showAll } from './showall.js';
import { deletePostbyId } from './deletebyId.js';
import { patchbyId } from './patchbyId.js';
import { readbyId } from './readPostbyId.js';
import { getbyIdUsers } from './getbyIdUser.js';

export async function postRoutes (app: FastifyInstance) {
    app.post('/', register)
    app.get('/', showAll)
    app.delete('/:id', deletePostbyId)
    app.patch('/:id', patchbyId)
    app.get('/usuario/:iduser', getbyIdUsers)
    app.get('/:id', readbyId)
}
