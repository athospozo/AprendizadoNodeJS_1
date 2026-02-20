import z from 'zod'
import { prisma } from '@/libs/prisma.js'
import type { FastifyReply, FastifyRequest } from 'fastify'

export async function deleteUserbyEmail (request: FastifyRequest, reply: FastifyReply){
    const deleteBodySchema = z.object({
        email: z.string().trim().min(1).max(100),
    }); 

    const { email } = deleteBodySchema.parse(request.params);

    const user = await prisma.usuario.delete ({
        where: {
            email: email,
        }
    })

    return reply.status(201).send({
        message: "Usuário deletado com sucesso!",
        usuarioDeletado: user
    })
}