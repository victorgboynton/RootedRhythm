import Image from "next/image";

export default function Gallery() {
	return (
		<div className="flex flex-row flex-wrap mt-[5vh]">
			<GalleryComponent
				picture="/fisheyeGroup.webp"
				alt="Group Fisheye"
				size="w-96 h-52"
			></GalleryComponent>
		</div>
	);
}
type GalleryComponentProps = {
	size: string;
	picture: string;
	alt: string;
};
function GalleryComponent({ size, picture, alt }: GalleryComponentProps) {
	return (
		<div className={`relative ${size}`}>
			<Image src={picture} alt={alt} fill></Image>
		</div>
	);
}
