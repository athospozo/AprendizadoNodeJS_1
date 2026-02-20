import type { FastifyInstance } from 'fastify'
import { usersRoutes } from './user/user.routes.js'
import { postRoutes } from './post/post.routes.js'

export async function appRoutes (app: FastifyInstance) {
    app.register(usersRoutes, { prefix: '/usuario' })

    app.register(postRoutes, {prefix: '/posts'})
}