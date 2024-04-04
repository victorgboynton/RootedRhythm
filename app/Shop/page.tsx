"use client";
import Image from "next/image";
import ShopStuff from "./ShopStuff";

export default function Shop() {
	return (
		<div>
			<ShopStuff />
		</div>
	);
}
export type ProductProps = {
	id: string;
	title: string;
	handle: string;
	descriptionHtml: HTMLElement;
	featuredImage: {
		url: string;
		id: string;
		altText: string;
	};
};

type ProductsListProps = {
	products: ProductProps[];
};
function ProductsList({ products }: ProductsListProps) {
	return (
		<div>
			{products.map((product) => (
				<div key={product.id}>
					{product.title}
					<div className="relative w-96 h-96">
						<Image
							src={"/rootedRhythmLogoInverted.webp"}
							alt={"hello"}
							fill
						></Image>
					</div>
				</div>
			))}
		</div>
	);
}
