import { DetailsPercentRow } from "../Section 2/DetailsPercent/DetailsPercentRow";

function SectionThree() {
	return (
		<div className="py-12 px-10 sm:px-20 bg-BG flex flex-col items-center gap-14 md:flex-row justify-center">
			<div className="w-full h-80 rounded-lg bg-prim2 min-w-60 max-w-[480px]">
				{" "}
				c
			</div>
			<div className="w-full h-auto flex flex-col rounded-lg gap-5 sm:w-auto bg-transparent border-white border-2 border-solid px-10 py-8 max-w-[480px]">
				<div className="text-primary bg-white px-3 py-1 rounded-sm text-xl font-semibold justify-between h-auto w-full sm:w-auto flex flex-row items-center">
					<span>Roi</span>
					<span>1670 %</span>
				</div>
				<div className=" text-white text-lg font-semibold justify-between h-auto  w-full sm:w-auto flex flex-row items-center">
					<DetailsPercentRow
						per="25"
						name="Rank"
					/>
				</div>
				<div className=" text-white text-lg font-semibold justify-between h-auto w-full sm:w-auto flex flex-row items-center">
					<DetailsPercentRow
						per="70"
						name="Risk"
					/>
				</div>
			</div>
		</div>
	);
}

export default SectionThree;
