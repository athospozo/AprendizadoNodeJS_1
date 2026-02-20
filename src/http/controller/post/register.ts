import z from 'zod'
import { prisma } from '@/libs/prisma.js'
import type { FastifyReply, FastifyRequest } from 'fastify'

export async function register(request: FastifyRequest, reply: FastifyReply)  {
    const registerBodySchema = z.object({
        titulo: z.string().trim().min(1).max(100),
        Conteudo: z.string().trim().min(1).max(1000),
        Idautor: z.int(),
    }); 

    const { titulo, Conteudo, Idautor } = registerBodySchema.parse(request.body);

    const post = await prisma.post.create ({
        data: {
            titulo,
            Conteudo,
            autorId: Idautor,
        }
    })


    return reply.status(201).send(post);
}