'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export type todo = {
	id: number;
	name: string;
	status: string;
	updated_at: Date;
};

export default function DelToDo({ todo }: { todo: todo }) {
	const [modal, setModal] = useState(false);
	const router = useRouter();
	const ondelete = async (id: number) => {
		await axios.delete(`/api/todos/${id}`);
		router.refresh();
		setModal(false);
	};
	return (
		<>
			<button className="btn btn-error mb-4" onClick={() => setModal(true)}>
				Delete
			</button>

			<div className={modal ? 'modal modal-open' : 'modal'}>
				<div className="modal-box relative">
					<button
						className="btn btn-sm btn-circle absolute right-2 top-2"
						onClick={() => setModal(false)}
					>
						✕
					</button>
					<h1 className="text-xl font-sans font-semibold text-center mb-3">
						Delete Activity {todo.name} ?
					</h1>
					<div className="text-center mt-6">
						<button
							onClick={async () => await ondelete(todo.id)}
							className="btn btn-success"
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
