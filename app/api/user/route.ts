import db from '@/prisma/db'
import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const petName = searchParams.get('petName')
    const ownerName = searchParams.get('ownerName')

    try {
        if (!petName || !ownerName) throw new Error('Pet and owner names required')
        await sql`INSERT INTO Pets (Name, Owner) VALUES (${petName}, ${ownerName});`
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
    const pets = await db.user.create({
        data: {
            id: '1',
            name: 'xyz',
            email: 'test@gmail.com',
            createdAt: '25.3.2024',
        },
    })

    return NextResponse.json({ pets }, { status: 200 })
}
