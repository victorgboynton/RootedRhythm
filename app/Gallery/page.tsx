import Image from "next/image";

export default function Gallery() {
	return (
		<div>
			<h1>This is the gallery</h1>
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
