import z from 'zod'
import { prisma } from '@/libs/prisma.js'
import type { FastifyReply, FastifyRequest } from 'fastify'

export async function register(request: FastifyRequest, reply: FastifyReply)  {
    const registerBodySchema = z.object({
        name: z.string().trim().min(1).max(100),
        email: z.email().max(100),
        password: z.string().trim().min(3).max(30),
        pictures: z.string().min(2).max(100).optional(),
    }); 

    const { name, email, password, pictures } = registerBodySchema.parse(request.body);

    const user = await prisma.usuario.create ({
        data: {
            name,
            email,
            passwordHash: password,
            picture: pictures,
        }
    })

    return reply.status(201).send(user);
}