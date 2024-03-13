export async function shopifyFetch({ query, variables }) {
  const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
  if (!key) {
    throw new Error("Invalid Access Key");
  }
  const endpoint = process.env.SHOPIFY_STORE_DOMAIN;
  if (!endpoint) {
    throw new Error("Invalid Endpoint");
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
      orders(first: 2) {
        nodes {
          id
          name
          createdAt
        }
      }
    }`,
  });
}