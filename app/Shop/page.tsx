"use client";
import { getAllProducts } from "./shopifyFetch";

export default function Shop() {
	return (
		<div className="pt-20 text-white">
			<h1>Products</h1>
			<div>
				<ProductsList products={getAllProducts} />
			</div>
		</div>
	);
}

type ProductProps = {
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
			{products.map((product) => {
				<div>{product.id}</div>;
			})}
		</div>
	);
}
