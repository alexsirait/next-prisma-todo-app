'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { SyntheticEvent, useState } from 'react';

export default function AddToDo() {
	const [activity, setActivity] = useState('');
	const [modal, setModal] = useState(false);
	const status = 'not finished yet';
	const router = useRouter();
	const onsubmit = async (e: SyntheticEvent) => {
		e.preventDefault();
		await axios.post('/api/todos', { activity, status });
		setActivity('');
		setModal(false);
		router.refresh();
	};
	return (
		<>
			<button className="btn btn-primary mb-4" onClick={() => setModal(true)}>
				Add
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
						Add Activity
					</h1>
					<form onSubmit={onsubmit}>
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
						<div className="mt-4">
							<button type="submit" className="btn btn-success">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
