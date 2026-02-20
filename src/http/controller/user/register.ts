import z from 'zod'
import { prisma } from '@/libs/prisma.js'
import type { FastifyReply, FastifyRequest } from 'fastify'
import { hash } from 'bcryptjs'
import { env } from '@/env/index.js'

export async function register(request: FastifyRequest, reply: FastifyReply)  {
    const registerBodySchema = z.object({
        name: z.string().trim().min(1).max(100),
        email: z.email().max(100),
        password: z.string().trim().min(3).max(30),
        picture: z.string().max(100).optional(),
    }); 

    const { name, email, password, picture } = registerBodySchema.parse(request.body);

    const passwordHash = await hash(password, env.HASH_SALT_ROUNDS)

    const user = await prisma.usuario.create ({
        data: {
            name,
            email,
            passwordHash,
            photo: picture ?? "",
        }
    })


    return reply.status(201).send({
        message:"Usuário criado com sucesso",
        user,
    })
}