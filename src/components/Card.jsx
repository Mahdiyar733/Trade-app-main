import { Card, CardContent } from "./ui/card";
import { TrendingDown } from "lucide-react";
import { ChartRank } from "./Charts/ChartRanks";

function CardRank() {
	return (
		<Card
			className="sm:max-w-[517px] bg-prim2 w-full aspect-video flex"
			x-chunk="charts-01-chunk-5">
			<CardContent className="grid grid-cols-3 grid-rows-1 h-full gap-6 md:gap-0 p-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
				<div className="grid items-center gap-2">
					<div className="grid flex-1 auto-rows-min gap-0.5">
						<div className="text-sm text-muted-foreground">Rank</div>
						<div className="flex items-baseline gap-2 text-base sm:text-xl font-bold tabular-nums leading-none text-primary">
							#43
							<span className="text-xs sm:text-sm font-normal  text-RED">
								-20
							</span>
						</div>
					</div>
					<div className="grid flex-1 auto-rows-min gap-0.5">
						<div className="text-sm text-muted-foreground">High</div>
						<div className="flex items-baseline gap-2 text-base sm:text-xl font-bold tabular-nums leading-none text-primary">
							14
							<span className="text-xs sm:text-sm font-normal flex flex-row-reverse text-RED gap-[2px] items-center">
								29 <TrendingDown className="w-4 h-4 rotate-12" />
							</span>
						</div>
					</div>
					<div className="grid flex-1 auto-rows-min gap-0.5">
						<div className="text-sm text-muted-foreground">Upside</div>
						<div className="flex items-baseline gap-2 text-primary text-base sm:text-xl font-bold tabular-nums leading-none">
							1670%
							<span className="text-xs sm:text-sm font-normal text-green-700">
								+50
							</span>
						</div>
					</div>
				</div>
				<ChartRank />
			</CardContent>
		</Card>
	);
}

export default CardRank;
