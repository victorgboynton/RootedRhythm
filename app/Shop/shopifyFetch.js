import { shopifyApi } from "@shopify/shopify-api";

export async function shopifyFetch({ query, variables }) {
  const endpoint = 'https://funtimeswithvic.myshopify.com/api/2024-01/graphql.json';
  if (!endpoint) {
    throw new Error("Invalid Endpoint");
  }
  const key = 'ceef1c44dd989b6ef1a582eb332d1b63';
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
