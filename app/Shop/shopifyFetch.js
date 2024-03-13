import { shopifyApi } from "@shopify/shopify-api";

export async function shopifyFetch({ query, variables }) {
    const endpoint = process.env.SHOPIFY_STORE_DOMAIN;
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
    console.log(result);
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
  console.log(await shopifyFetch({
    query: `{
      products(first: 5) {
        nodes {
          id
          title
          featuredImage
        }
      }
    }`,
  }))
  return shopifyFetch({
    query: `{
      products(first: 5) {
        nodes {
          id
          title
          featuredImage
        }
      }
    }`,
  });
}
