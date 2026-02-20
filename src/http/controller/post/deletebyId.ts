import z from 'zod'
import { prisma } from '@/libs/prisma.js'
import type { FastifyReply, FastifyRequest } from 'fastify'

export async function deletePostbyId (request: FastifyRequest, reply: FastifyReply){
    const paramSchema = z.object({
        id: z.coerce.number().int(),
    }); 
    
    const { id } = paramSchema.parse(request.params)

    const post = await prisma.post.delete ({
        where: {
            id: id,
        }
    })

    return reply.status(200).send({
        message: "Post deletado com sucesso!",
        postDeletado: post
    })
}