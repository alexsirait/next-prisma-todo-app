import React from 'react';
import { PrismaClient } from '@prisma/client';
import Layout from '../components/Layout';
import AddToDo from './AddToDo';
import DelToDo from './DelToDo';
import UpToDo from './UpToDo';

const prisma = new PrismaClient();

const getTodos = async () => {
	const res = await prisma.todo.findMany({
		select: { id: true, name: true, status: true, updated_at: true },
	});
	return res;
};
export default async function page() {
	const todos = await getTodos();
	return (
		<Layout>
			<AddToDo />
			<table className="table w-full mb-3">
				<thead>
					<tr>
						<th></th>
						<th>Activity</th>
						<th>Status</th>
						<th>Updated At</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{todos &&
						todos?.map((todo, index) => (
							<tr key={index}>
								<th>{++index}</th>
								<td>{todo.name}</td>
								<td>{todo.status}</td>
								<td>{todo.updated_at.toDateString()}</td>
								<td className="flex items-center gap-x-2">
									<DelToDo todo={todo} />
									<UpToDo todo={todo} />
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</Layout>
	);
}
