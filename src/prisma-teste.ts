import { prisma } from './libs/prisma.js'

async function main() {
  try {
    const user = await prisma.usuario.create({
      data: {
        name: 'Ayrton',
        email: 'athospozoo@gmail.com',
        passwordHash: 'aleatorio',
        photo: 'sdfghjkjhgfd',
      },
    })

    console.log('✅ Usuário criado com sucesso!')
    console.log(user)
  } catch (error) {
    console.error('❌ Erro ao criar usuário:', error)
  } finally {
    await prisma.$disconnect()
  }""
}

main()