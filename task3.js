function createApiClient(baseUrl) {
  let requestCount = 0;

  return {
    async get(path) {
      try {
        const response = await fetch(baseUrl + path);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        requestCount++;
        return data;
      } catch (error) {
        requestCount++;
        return { error: "Запит не вдався" };
      }
    },

    getRequestCount() {
      return requestCount;
    },
  };
}

// Тест
async function demo() {
  const api = createApiClient("https://jsonplaceholder.typicode.com");

  const user = await api.get("/users/1");
  console.log("User:", user.name);

  const posts = await api.get("/posts");
  console.log("Posts count:", posts.length);

  console.log("Запитів виконано:", api.getRequestCount()); // 2

  const bad = await api.get("/nonexistent");
  console.log("Помилка:", bad); // { error: "Запит не вдався" }
  console.log("Запитів виконано:", api.getRequestCount()); // 3
}

demo();