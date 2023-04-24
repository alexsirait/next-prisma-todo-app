import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();
export const DELETE = async (
	req: Request,
	{ params }: { params: { id: string } }
) => {
	const deleteByID = await prisma.todo.delete({
		where: {
			id: Number(params.id),
		},
	});
	return NextResponse.json(deleteByID);
};

export const PUT = async (
	req: Request,
	{ params }: { params: { id: string } }
) => {
	const reqjson = await req.json();
	const dataTodo = await prisma.todo.update({
		where: {
			id: Number(params.id),
		},
		data: {
			name: reqjson.name,
			status: reqjson.status,
		},
	});
	return NextResponse.json(dataTodo);
};
