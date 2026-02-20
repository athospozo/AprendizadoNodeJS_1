import z from 'zod'
import { prisma } from '@/libs/prisma.js'
import type { FastifyReply, FastifyRequest } from 'fastify'

export async function readbyId(request: FastifyRequest, reply: FastifyReply)  {

    const paramsSchema = z.object({
        id: z.coerce.number(), 
    });

    const { id } = paramsSchema.parse(request.params)

    const user = await prisma.post.findUnique({
        where:{
            id: id,
        },
    })

    return reply.status(201).send(user)
}