/* eslint-disable react/prop-types */
"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
	{ month: "January", rate: 450 },
	{ month: "February", rate: 200 },
	{ month: "March", rate: 237 },
	{ month: "April", rate: 300 },
	{ month: "May", rate: 350 },
	{ month: "June", rate: 380 },
];

const chartConfig = {
	rate: {
		label: "Rate",
		color: "hsl(var(--primary))",
	},
};

export function Area_Chart() {
	// const { color1 } = colors;
	chartConfig.rate.color = "#747FFF";
	return (
		<Card className="bg-prim2 w-full  sm:w-full">
			<CardHeader>
				<CardTitle className="font-bold text-BG">Area Chart</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<AreaChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12,
						}}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator="line" />}
						/>
						<Area
							dataKey="rate"
							type="natural"
							fill="var(--color-rate)"
							fillOpacity={0.4}
							stroke="var(--color-rate)"
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
