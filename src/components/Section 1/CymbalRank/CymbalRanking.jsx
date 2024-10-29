import ReactSpeedometer from "react-d3-speedometer";

export function CymbalRanking() {
	return (
		<div className="animate-fade-left animate-delay-[1300ms] w-full flex flex-[2] rounded-lg sm:flex-[3] justify-center items-center">
			<ReactSpeedometer
				width={385}
				segments={5}
				needleHeightRatio={0.8}
				height={200}
				value={490}
				segmentColors={["#7F5539", "#CCCCCC", "#FFD60A", "#50C878", "#5d5dd2"]}
				currentValueText=" "
				customSegmentLabels={[
					{
						text: "Shit",
						position: "OUTSIDE",
						color: "white",
					},
					{
						text: "Dead",
						position: "OUTSIDE",
						color: "white",
					},
					{
						text: "Silver",
						position: "OUTSIDE",
						color: "white",
					},
					{
						text: "Gold",
						position: "OUTSIDE",
						color: "white",
					},
					{
						text: "Diamond",
						position: "OUTSIDE",
						color: "white",
					},
				]}
				ringWidth={30}
				needleTransitionDuration={3333}
				needleTransition="easeElastic"
				needleColor={"#ffffff"}
			/>
		</div>
	);
}
