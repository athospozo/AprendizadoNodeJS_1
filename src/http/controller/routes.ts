import type { FastifyInstance } from 'fastify'
import { usersRoutes } from './user/user.routes.js'

export async function appRoutes (app: FastifyInstance) {
    app.register(usersRoutes, { prefix: '/usuario' })
}