import { DetailsPercentRow } from "./DetailsPercentRow";

export function DetailsPercent() {
	return (
		<div className="animate-fade-right animate-delay-[1600ms] flex flex-col w-full sm:w-4/6 items-center justify-center py-2 font-Poppins sm:gap-2 flex-nowrap text-nowrap sm:py-0 sm:justify-between sm:h-full">
			<DetailsPercentRow
				name="Techno"
				per="80"
			/>
			<DetailsPercentRow
				name="Anchain"
				per="90"
			/>
			<DetailsPercentRow
				name="Fanda"
				per="100"
			/>
			<DetailsPercentRow
				name="Structur"
				per="100"
			/>
			<DetailsPercentRow
				name="ECToken"
				per="20"
			/>
		</div>
	);
}
