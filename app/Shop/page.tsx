"use client";
import { useEffect, useState } from "react";
import { getAllProducts } from "./shopifyFetch";

export default function Shop() {
	const [products, setProducts] = useState<ProductProps[]>([]);
	useEffect(() => {
		const fetchProducts = async () => {
			const allProducts = await getAllProducts();
			setProducts(allProducts.body.data.products.nodes);
		};

		fetchProducts();
	}, []);
	return (
		<div className="pt-20 text-white">
			<h1>Products</h1>
			<div>
				<ProductsList products={products} />
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
			{products.map((product) => (
				<div key={product.id}>{product.title}</div>
			))}
		</div>
	);
}
