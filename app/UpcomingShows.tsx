import { ShowPreviewProps, ShowPreview } from "./ShowPreviewProps";

type UpcomingShowsProps = {
	showList: ShowPreviewProps[];
};
export function UpcomingShows({ showList }: UpcomingShowsProps) {
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
