/* eslint-disable react/prop-types */
import { Card } from "@radix-ui/themes";
import CardRank from "../Card";
import { ChartCurr } from "../Charts/Chart";
import { Area_Chart } from "../Charts/AreaChart";
import { DetailsPercent } from "./DetailsPercent/DetailsPercent";
import ScoreBadge from "./ScoreBadge/ScoreBadge";

function SectionTwo({ colors }) {
	const { color1 } = colors;
	return (
		<div className="flex items-center justify-center flex-col bg-BG">
			<div className="w-full bg-BG flex flex-col-reverse justify-center sm:flex-row items-center px-6 pt-0 sm:px-9 sm:gap-4 gap-3">
				<div className="flex items-center justify-center w-full sm:w-2/6">
					<ScoreBadge />
				</div>
				<DetailsPercent />
			</div>
			<div className="flex flex-col md:flex-row-reverse bg-BG rounded-lg w-full gap-7 px-6 sm:px-9 p-12 max-w-[1000px] items-center">
				<div className="flex flex-col items-center flex-1 gap-4">
					<ChartCurr colors={colors} />
					<CardRank />
				</div>
				<div className="flex flex-col items-center flex-1 h-full gap-4 w-full max-w-[406px] sm:max-w-[487px]">
					<Area_Chart colors={colors} />
					<div className="w-full flex flex-row items-center justify-between px-5 lg:px-8 h-10 bg-prim2 rounded-lg">
						<span className="font-semibold text-xl">1022</span>
						<div className=" gap-2 lg:gap-5 flex flex-row items-center">
							<span
								className="p-1 text-white rounded-md"
								style={{ backgroundColor: color1 }}>
								95
							</span>
							<span className="px-2 py-1 text-white rounded-md bg-GREEN">
								S
							</span>
							<span className="font-semibold">: Final Score</span>
						</div>
					</div>
					<Card
						style={{ backgroundColor: "#D1DBFF", contain: "none" }}
						className="aspect-video w-full p-4 rounded-lg bg-prim2 relative h-full">
						<iframe
							className="rounded-lg bg-contain w-full h-full"
							src="https://www.aparat.com/video/video/embed/videohash/z957698/vt/frame"
							allowFullScreen="true"
							webkitallowfullscreen="true"
							mozallowfullscreen="true"></iframe>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default SectionTwo;
