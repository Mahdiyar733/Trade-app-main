/* eslint-disable react/prop-types */
export function DetailsPercentRow({ name = "Default", per = "0" }) {
	return (
		<div className="grid grid-cols-5 grid-rows-1 w-full items-center justify-between gap-3 flex-1 text-nowrap flex-nowrap text-sm sm:text-base md:text-xl">
			<span className="text-prim2 font-medium text-nowrap self-end place-self-end">
				{name}:
			</span>
			<progress
				className="progress h-2 sm:h-3 progress-primary col-span-3 w-full"
				value={per}
				max="100"></progress>
			<span className="text-prim2 font-medium text-nowrap flex-1">{per}%</span>
		</div>
	);
}
