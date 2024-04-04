"use client";
import { useEffect, useState } from "react";
import { getAllProducts } from "./shopifyFetch";
import { ProductProps } from "./page";

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
				domain: process.env.SHOPIFY_STORE_DOMAIN,
				storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
			});

			ShopifyBuy.UI.onReady(client).then((ui: any) => {
				ui.createComponent("collection", {
					id: process.env.SHOPIFY_COLLECTION_ID,
					node: document.getElementById("collection-component-1711452585861"),
					moneyFormat: "%24%7B%7Bamount%7D%7D",
					options: {
						product: {
							iframe: false, // Set to false to embed the product directly into your page instead of using an iframe
							buttonDestination: "modal", // Specifies where to direct the user after clicking the button: "cart", "checkout", or "modal"
							variantId: "all",
							width: "240px",
							contents: {
								img: true,
								imgWithCarousel: true,
								title: false,
								variantTitle: false,
								price: true,
								description: true,
								buttonWithQuantity: false,
								quantity: false,
							},
							styles: {
								product: {
									"@media (min-width: 601px)": {
										"max-width": "calc(25% - 20px)",
										"margin-left": "20px",
										"margin-bottom": "50px",
										width: "calc(25% - 20px)",
									},
								},
							},
						},
						cart: {
							contents: {
								button: true,
							},
							styles: {
								button: {
									"background-color": "#ff6700",
									":hover": {
										"background-color": "#e65c00",
									},
									"border-radius": "2px",
									":focus": {
										"background-color": "#e65c00",
									},
								},
								footer: {
									"background-color": "#ffffff",
								},
							},
						},
						modalProduct: {
							contents: {
								img: false,
								imgWithCarousel: true,
								button: false,
								buttonWithQuantity: true,
							},
							styles: {
								product: {
									"@media (min-width: 601px)": {
										"max-width": "100%",
										"margin-left": "0px",
										"margin-bottom": "0px",
									},
								},
							},
						},
						productSet: {
							styles: {
								products: {
									"@media (min-width: 601px)": {
										"margin-left": "-20px",
									},
								},
							},
						},
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
