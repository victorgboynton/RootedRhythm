"use client";
import { getAllProducts } from "./shopifyFetch";

export default function Shop() {
	return (
		<div className="pt-20 text-white">
			<h1>Products</h1>
			<div>
				<button onClick={getAllProducts}>Click Me</button>
			</div>
		</div>
	);
}
