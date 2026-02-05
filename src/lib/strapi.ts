/**
 * Strapi API helper functions
 */

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

export async function fetchAPI(endpoint: string, queryParams: Record<string, any> = {}) {
    const { populate = "*", sort = "createdAt:desc", ...others } = queryParams;

    // Build query string
    const url = new URL(`${STRAPI_URL}/api${endpoint}`);

    // Add populate
    if (populate) url.searchParams.append("populate", typeof populate === "string" ? populate : JSON.stringify(populate));

    // Add sort
    if (sort) url.searchParams.append("sort", sort);

    // Add other params
    Object.entries(others).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
    });

    const response = await fetch(url.toString(), {
        headers: {
            "Content-Type": "application/json",
            ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
        },
        next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response.ok) {
        throw new Error(`Strapi API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}

export async function getProducts() {
    const response = await fetchAPI("/products", {
        populate: "*",
        sort: "createdAt:asc",
    });
    return response.data || [];
}
