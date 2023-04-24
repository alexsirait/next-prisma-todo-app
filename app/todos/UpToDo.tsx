'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { SyntheticEvent, useState } from 'react';
import { todo } from './DelToDo';

export default function UpToDo({ todo }: { todo: todo }) {
	const [activity, setActivity] = useState(todo.name);
	const [modal, setModal] = useState(false);
	const [status, setStatus] = useState(todo.status);
	const router = useRouter();
	const onupdate = async (e: SyntheticEvent) => {
		e.preventDefault();
		await axios.put(`/api/todos/${todo.id}`, { activity, status });
		setActivity('');
		setModal(false);
		router.refresh();
	};
	return (
		<>
			<button className="btn btn-primary mb-4" onClick={() => setModal(true)}>
				Edit
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
						Edit Activity
					</h1>
					<form onSubmit={onupdate}>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Activity</span>
							</label>
							<input
								type="text"
								value={activity}
								onChange={(e) => setActivity(e.target.value)}
								placeholder="Enter activity .."
								className="input input-bordered w-full max-w-xs"
							/>
						</div>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Status</span>
							</label>
							<select
								className="select select-bordered"
								value={status}
								onChange={(e) => setStatus(e.target.value)}
							>
								<option disabled selected>
									Pick one
								</option>
								<option>not finished yet</option>
								<option>do it now</option>
								<option>as soon as possible</option>
								<option>some time</option>
							</select>
						</div>
						<div className="mt-4">
							<button type="submit" className="btn btn-success">
								Update
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
