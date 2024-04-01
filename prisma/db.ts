import { PrismaClient } from '@prisma/client'

let db: PrismaClient

if (process.env.NODE_ENV === 'production') {
    db = new PrismaClient()
} else {
    if (!(global as any).prisma) {
        ;(global as any) = new PrismaClient()
    }
    db = global as any
}

export { db }
