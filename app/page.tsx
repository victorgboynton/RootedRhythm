import Image from "next/image";
import { SpotifyPreview } from "./SpotifyPreview";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col pt-[5vh] text-white text-xl">
			<div className="sm:bg-sampleGroup w-[99vw] h-[600px] items-center mx-auto">
				<div className="sm:bg-black/60 h-full pt-5">
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
					<UpcomingShows showList={upcomingShows}></UpcomingShows>
				</div>
			</div>
		</main>
	);
}

const upcomingShows: ShowPreviewProps[] = [
	{
		id: 1,
		date: new Date("March 23, 2024 22:00:00"),
		location: "Ziggy's Big Balls",
	},
	{
		id: 2,
		date: new Date("March 25, 2024 22:00:00"),
		location: "James Cameron Saloon",
	},
	{
		id: 3,
		date: new Date("March 27, 2024 22:00:00"),
		location: "Victor's Dungeon",
	},
];
type ShowPreviewProps = {
	id: number;
	date: Date;
	location: string;
};
function ShowPreview({ id, date, location }: ShowPreviewProps) {
	return (
		<div className="mb-20 w-[90vw] sm:w-[80vw] md:w-[65vw] lg:w-[40vw] xl:w-[25vw] justify-center flex flex-col items-center bg-[#0f0f0f] rounded-2xl mx-auto py-4">
			<p>{date.toLocaleDateString()}</p>
			<p className="">At</p>
			<h1>{location}</h1>
		</div>
	);
}
type UpcomingShowsProps = {
	showList: ShowPreviewProps[];
};
function UpcomingShows({ showList }: UpcomingShowsProps) {
	return (
		<div className="flex items-center justify-center">
			<div className=" flex flex-col sm:flex-row flex-wrap justify-between xl:space-x-10">
				{showList.map((e, index) => (
					<div key={index}>
						{" "}
						<ShowPreview
							id={e.id}
							date={e.date}
							location={e.location}
						></ShowPreview>
					</div>
				))}
			</div>
		</div>
	);
}
