type SpotifyPreviewProps = {
	url: string;
};
export function SpotifyPreview({ url }: SpotifyPreviewProps) {
	return (
		<iframe
			src={url}
			height="200"
			allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
			loading="lazy"
			className=" w-[90vw] sm:w-[80vw] md:w-[65vw] lg:w-[40vw] xl:w-[25vw] mx-auto"
		></iframe>
	);
}
