import Link from 'next/link';
import Layout from './components/Layout';

export default function Home() {
	return (
		<Layout>
			<div className="mb-6">
				<span className="text-lg font-mono font-semibold">ToDo App :{`)`}</span>
			</div>
			<Link href={'/todos'} className="btn btn-primary">
				ToDo
			</Link>
		</Layout>
	);
}
