import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();
export const POST = async (req: Request) => {
	const requestJSON = await req.json();
	const todos = await prisma.todo.create({
		data: {
			name: requestJSON.activity,
			status: requestJSON.status,
		},
	});
	return NextResponse.json(todos);
};
