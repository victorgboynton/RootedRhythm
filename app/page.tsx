import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col py-[10vh] text-white text-xl">
			<div className="sm:bg-sampleGroup w-[99vw] h-[600px] items-center mx-auto">
				<div className="sm:bg-black/60 h-full">
					<div className="relative w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] mx-auto">
						<Image
							src="/rootedRhythmLogoInverted.webp"
							alt="The Rooted Rhythm Logo"
							fill
						></Image>
					</div>
					<h1 className="text-center text-3xl sm:text-[50px] sm:leading-[75px] font-Anta">
						Bringing positivity through soul expression
					</h1>
				</div>
			</div>
			<div className="mt-12 w-[90vw] mx-auto">
				<h1 className="text-center font-Anta text-[40px] leading-[60px] mb-6">
					Peep Our Hit Tracks
				</h1>
				<div className=" flex flex-row flex-wrap justify-between ">
					<SpotifyPreview url="https://open.spotify.com/embed/track/2o9m2WehTQzse46Q8X0Nns?utm_source=generator&theme=0"></SpotifyPreview>
					<SpotifyPreview url="https://open.spotify.com/embed/track/3nQEMMLDw0PaZ2FBtxawL4?utm_source=generator&theme=0"></SpotifyPreview>
					<SpotifyPreview url="https://open.spotify.com/embed/track/4NmOsSclInafCJTejEhPSp?utm_source=generator&theme=0"></SpotifyPreview>
				</div>
			</div>
		</main>
	);
}
type SpotifyPreviewProps = {
	url: string;
};
function SpotifyPreview({ url }: SpotifyPreviewProps) {
	return (
		<iframe
			src={url}
			width="100%"
			height="200"
			allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
			loading="lazy"
			className=" w-[90vw] sm:w-[80vw] md:w-[65vw] lg:w-[40vw] xl:w-[25vw] mx-auto"
		></iframe>
	);
}
