export type ShowPreviewProps = {
	id: number;
	date: Date;
	location: string;
};
export function ShowPreview({ id, date, location }: ShowPreviewProps) {
	return (
		<div className="mb-20 w-[90vw] sm:w-[80vw] md:w-[65vw] lg:w-[40vw] xl:w-[25vw] justify-center flex flex-col items-center bg-[#0f0f0f]  rounded-2xl py-4">
			<p>{date.toLocaleDateString()}</p>
			<p className="">At</p>
			<h1>{location}</h1>
		</div>
	);
}
