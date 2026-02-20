import z from 'zod'
import { prisma } from '@/libs/prisma.js'
import type { FastifyReply, FastifyRequest } from 'fastify'

type PatchPostBody = {
    titulo?: string;
    conteudo?: string;
}

export async function patchbyId(request: FastifyRequest, reply: FastifyReply)  {

    const paramsSchema = z.object({
        id: z.coerce.number(), // Transforma a string da URL em número
    });

    const PatchPostSchema = z.object({
        titulo: z.string().trim().min(1).max(100),
        conteudo: z.string().trim().min(1).max(1000),
    }); 

    const { id } = paramsSchema.parse(request.params)

    const { titulo, conteudo } = PatchPostSchema.parse(request.body);

    let objetoUtilizavel: PatchPostBody = {}

    if (titulo !== undefined) objetoUtilizavel.titulo = titulo

    if (conteudo !== undefined) objetoUtilizavel.conteudo = conteudo

    const user = await prisma.post.update({
        where:{
            id: id,
        },
        data: objetoUtilizavel,
    })

    return reply.status(201).send(user)
}