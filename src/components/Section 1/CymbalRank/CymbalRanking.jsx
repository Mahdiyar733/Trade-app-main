import ReactSpeedometer from "react-d3-speedometer";

export function CymbalRanking() {
	return (
		<div className="animate-fade-left animate-delay-[1300ms] w-full flex flex-[2]  bg-primary rounded-lg sm:flex-[3] justify-center items-center">
			<div>
				<div>
					<ReactSpeedometer
						width={400}
						needleHeightRatio={0.9}
						value={100}
						currentValueText="Happiness Level"
						customSegmentLabels={[
							{
								text: "Very Bad",
								position: "OUTSIDE",
								color: "#555",
							},
							{
								text: "Bad",
								position: "INSIDE",
								color: "#555",
							},
							{
								text: "Ok",
								position: "INSIDE",
								color: "#555",
								fontSize: "19px",
							},
							{
								text: "Good",
								position: "INSIDE",
								color: "#555",
							},
							{
								text: "Very Good",
								position: "INSIDE",
								color: "#555",
							},
						]}
						ringWidth={40}
						needleTransitionDuration={3333}
						needleTransition="easeElastic"
						needleColor={"#90f2ff"}
						textColor={"#d8dee9"}
					/>
				</div>
			</div>
		</div>
	);
}
