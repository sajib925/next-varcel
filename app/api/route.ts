// import { sql } from '@vercel/postgres';
// import { NextResponse } from 'next/server';

import { NextRequest, NextResponse } from "next/server";

 
// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const petName = searchParams.get('petName');
//   const ownerName = searchParams.get('ownerName');
 
//   try {
//     if (!petName || !ownerName) throw new Error('Pet and owner names required');
//     await sql`INSERT INTO Pets (Name, Owner) VALUES (${petName}, ${ownerName});`;
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
 
//   const pets = await sql`SELECT * FROM Pets;`;
//   return NextResponse.json({ pets }, { status: 200 });
// }



export async function GET (request: NextRequest) {
  return NextResponse.json({message: "Get Request"})
}

export async function POST (request: NextRequest) {
  const body = await request.json()
  return NextResponse.json({message: body})
}

export async function PUT (request: NextRequest) {
  const body = await request.json()
  return NextResponse.json({message: body})
}

export async function PATCH (request: NextRequest) {
  const body = await request.json()
  return NextResponse.json({message: body})
}

export async function DELETE (request: NextRequest) {
  return NextResponse.json({message: "Delete Request"})
}