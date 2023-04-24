export default function Layout({ children }: { children: any }) {
	return (
		<div className="flex h-screen">
			<div className="m-auto w-1/2">
				<div className="mockup-window border bg-base-300">
					<div className="px-4 py-6 bg-base-200">{children}</div>
				</div>
			</div>
		</div>
	);
}
