export async function api(endpoint, method = "GET", body) {
  const token = localStorage.getItem("token");
  if (token) {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    const data = await (method === "GET" ? response.json() : response.json())
    return data
  }
}