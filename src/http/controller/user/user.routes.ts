import type { FastifyInstance } from 'fastify';
import { register } from './register.js';
import { showAll } from './showall.js';
import { deleteUserbyEmail } from './deletebyEmail.js';
import { patchbyId } from './patchbyId.js';
import { readbyId } from './readUserbyId.js';


export async function usersRoutes (app: FastifyInstance) {
    app.post('/', register)
    app.get('/', showAll)
    app.delete('/', deleteUserbyEmail)
    app.patch('/:id', patchbyId)
    app.get('/:id', readbyId)
}