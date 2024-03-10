import Image from "next/image";
import { SpotifyPreview } from "./SpotifyPreview";
import { UpcomingShows } from "./UpcomingShows";
import { upcomingShows } from "./upcomingShows.1";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col pt-[5vh] text-white text-xl">
			<div className="sm:bg-trial bg-no-repeat bg-center w-[99vw] h-[600px] items-center mx-auto">
				<div className="sm:bg-black/40 h-full pt-5">
					<div className="relative w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] mx-auto animate-[fadeIn_2s_ease]">
						<Image
							src="/rootedRhythmLogoInverted.webp"
							alt="The Rooted Rhythm Logo"
							fill
							priority={true}
						></Image>
					</div>
					<h1 className="text-center text-3xl sm:text-[50px] sm:leading-[81px] font-Anta">
						Bringing positivity through soul expression
					</h1>
				</div>
			</div>

			<div className="my-12 w-[90vw] mx-auto bg-[#0b0b2b] p-4 rounded-2xl">
				<h1 className="text-center font-Anta text-[40px] leading-[65px] mb-6">
					Peep Our Hit Tracks
				</h1>
				{
					"This is where you will replace the urls of the songs you want to display"
				}
				<div className=" flex flex-row flex-wrap justify-between ">
					<SpotifyPreview url="https://open.spotify.com/embed/track/2o9m2WehTQzse46Q8X0Nns?utm_source=generator&theme=0"></SpotifyPreview>
					<SpotifyPreview url="https://open.spotify.com/embed/track/3nQEMMLDw0PaZ2FBtxawL4?utm_source=generator&theme=0"></SpotifyPreview>
					<SpotifyPreview url="https://open.spotify.com/embed/track/4NmOsSclInafCJTejEhPSp?utm_source=generator&theme=0"></SpotifyPreview>
				</div>
			</div>

			<div className="mb-20 w-[90vw] mx-auto bg-[#212122] p-4 rounded-2xl">
				<h1 className="text-center font-Anta text-[40px] leading-[65px]">
					Upcoming Shows:
				</h1>
				<div>
					{"To Change this section, go to upcomingShows.tsx"}
					<UpcomingShows showList={upcomingShows}></UpcomingShows>
				</div>
			</div>
		</main>
	);
}
