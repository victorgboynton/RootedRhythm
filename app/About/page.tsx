import Image from "next/image";

export default function About() {
	return (
		<div className="pt-20 text-white font-Anta">
			<div className="text-center text-[60px] leading-[97px]">
				<h1>We Are</h1>
				<div className="relative w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] mx-auto animate-[fadeIn_2s_ease]">
					<Image
						src="/rootedRhythmLogoInverted.webp"
						alt="Rooted Rhythm Logo"
						fill
					></Image>{" "}
				</div>
			</div>
			<div></div>
		</div>
	);
}
