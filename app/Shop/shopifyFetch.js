import { shopifyApi } from "@shopify/shopify-api";

export async function shopifyFetch({ query, variables }) {
  const endpoint = process.env.SHOPIFY_STORE_DOMAIN_API;
  if (!endpoint) {
    throw new Error("Invalid Endpoint");
  }
  const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
  if (!key) {
    throw new Error("Invalid Access Key");
  }
  
  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": key,
      },
      body: { query, variables } && JSON.stringify({ query, variables }),
    });
    return {
      status: result.status,
      body: await result.json(),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      status: 500,
      error: "Error receiving data",
    };
  }
}
export async function getAllProducts() {
  const response = await shopifyFetch({
    query: `{
      products(first: 10) {
        nodes {
          id
          title
          handle
          descriptionHtml
          featuredImage {
                url
                id
                altText
          }
          }
        }
      }`,
  });
  return response;
}
