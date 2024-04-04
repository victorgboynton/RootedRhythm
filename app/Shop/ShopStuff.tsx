"use client";
import { useEffect, useState } from "react";
import { getAllProducts } from "./shopifyFetch";
import { ProductProps, ProductsList } from "./page";

export default function ShopStuff() {
	const [products, setProducts] = useState<ProductProps[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const allProducts = await getAllProducts();
			console.log(allProducts);
			setProducts(allProducts.body.data.products.nodes);
		};

		fetchProducts();

		// Dynamically load the Shopify Buy Button script
		const loadScript = () => {
			const scriptURL =
				"https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
			const script = document.createElement("script");
			script.async = true;
			script.src = scriptURL;
			script.onload = () => {
				if (window.ShopifyBuy) {
					if (window.ShopifyBuy.UI) {
						ShopifyBuyInit();
					}
				}
			};
			document.head.appendChild(script);
		};

		const ShopifyBuyInit = () => {
			const client = ShopifyBuy.buildClient({
				domain: "your-shopify-domain.myshopify.com",
				storefrontAccessToken: "your-storefront-access-token",
			});

			ShopifyBuy.UI.onReady(client).then((ui) => {
				ui.createComponent("collection", {
					id: "your-collection-id",
					node: document.getElementById("collection-component-1711452585861"),
					moneyFormat: "%24%7B%7Bamount%7D%7D",
					options: {
						// Customize these options as needed
					},
				});
			});
		};

		// Check if ShopifyBuy is already loaded before trying to load it
		if (window.ShopifyBuy) {
			if (window.ShopifyBuy.UI) {
				ShopifyBuyInit();
			} else {
				loadScript();
			}
		} else {
			loadScript();
		}
	}, []);

	return (
		<div className="pt-20 text-white">
			<h1>Products</h1>
			<div>
				{products.map((product) => (
					<div key={product.id}>{product.title}</div>
				))}
			</div>
		</div>
	);
}
