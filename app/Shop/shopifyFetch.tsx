type shopifyFetchProps = {
  query: {
    id: number;
    name: string;
    picture: string;
  };
  variables: string;
};
export async function shopifyFetch({ query, variables }: shopifyFetchProps) {
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
