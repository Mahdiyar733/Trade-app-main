import { DetailsPercentRow } from "../Section 2/DetailsPercent/DetailsPercentRow";

function SectionThree() {
	return (
		<div className="py-12 px-6 sm:px-10 w-dvw bg-BG flex flex-col items-center gap-14 md:flex-row justify-center">
			<div className="w-full h-80 rounded-lg bg-prim2 min-w-60 max-w-[480px] flex flex-col items-center gap-2 p-4 justify-evenly">
				<h1 className="text-2xl font-medium">Summery</h1>
				<div className="bg-primary text-white py-2 w-full rounded-lg flex flex-row items-center justify-between px-5">
					<span className="text-lg">Name :</span>
					<span className="text-lg font-semibold">Sui</span>
				</div>
				<div className="bg-primary text-white py-2 w-full rounded-lg flex flex-row items-center justify-between px-5">
					<span className="text-lg">Digital diamond :</span>
					<span className="text-lg font-semibold">95</span>
				</div>
				<div className="bg-primary text-white py-2 w-full rounded-lg flex flex-row items-center justify-between px-5">
					<span className="text-lg">Rate Currency :</span>
					<span className="text-lg font-semibold">1022 S</span>
				</div>
				<div className="bg-primary text-white py-2 w-full rounded-lg flex flex-row items-center justify-between px-5">
					<span className="text-lg">Percent Value :</span>
					<span className="text-lg font-semibold">100 %</span>
				</div>
			</div>
			<div className="w-full h-auto flex flex-col rounded-lg gap-5 sm:w-auto bg-transparent border-white border-2 border-solid px-10 py-8 max-w-[480px]">
				<div className="text-primary bg-white px-3 py-1 rounded-sm text-xl font-semibold justify-between h-auto w-full sm:w-auto flex flex-row items-center">
					<span>Roi</span>
					<span>2230 %</span>
				</div>
				<div className=" text-white text-lg font-semibold justify-between h-auto  w-full sm:w-auto flex flex-row items-center">
					<DetailsPercentRow
						per="80"
						name="Reward"
					/>
				</div>
				<div className=" text-white text-lg font-semibold justify-between h-auto w-full sm:w-auto flex flex-row items-center">
					<DetailsPercentRow
						per="0"
						name="Risk"
					/>
				</div>
			</div>
		</div>
	);
}

export default SectionThree;
