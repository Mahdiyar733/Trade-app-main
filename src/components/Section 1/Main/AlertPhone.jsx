import { useState } from "react";

function AlertPhone() {
	const [isShow, setIsShow] = useState(true);
	return isShow ? (
		<div
			role="alert"
			className="alert shadow-lg gap-2 rounded-lg p-3 mb-2 bg-prim2 sm:hidden">
			<div className="flex flex-row items-center gap-1 justify-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					className="stroke-black h-4 w-4 shrink-0">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
				</svg>
				<div>
					<div className="text-xs font-semibold">
						Better use Tablet or Laptop
					</div>
				</div>
			</div>
			<button
				className="btn btn-xs w-1/2"
				onClick={() => setIsShow(false)}>
				Understand
			</button>
		</div>
	) : (
		""
	);
}

export default AlertPhone;
