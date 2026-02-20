import type { FastifyInstance } from 'fastify';
import { register } from './register.js';

export async function postRoutes (app: FastifyInstance) {
    app.post('/', register)
}