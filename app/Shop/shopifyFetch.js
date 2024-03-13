import { shopifyApi } from "@shopify/shopify-api";

export async function shopifyFetch({ query, variables }) {
    const endpoint = 'https://bdbc0f.myshopify.com/api/2024-01/graphql.json';
  if (!endpoint) {
    throw new Error("Invalid Endpoint");
  }
  const key = '8c3e07a43241b5d61ec52eadd42ebcb1'
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
  return shopifyFetch({
    query: `{
      products(first: 5) {
        nodes {
          id
          title
          createdAt
        }
      }
    }`,
  });
}
