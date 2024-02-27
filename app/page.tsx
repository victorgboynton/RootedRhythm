import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 text-white text-xl">
			<div>
				<div className="relative w-[500px] h-[500px]">
					<Image
						src="/rootedRhythmLogoInverted.webp"
						alt="The Rooted Rhythm Logo"
						fill
					></Image>
				</div>
				<h1 className="text-center text-[50px]">
					Bringing positivity through soul expression
				</h1>
			</div>
		</main>
	);
}
