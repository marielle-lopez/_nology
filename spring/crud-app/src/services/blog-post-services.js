export const getAllBlogPosts = async () => {
  const response = await fetch("http://localhost:8080/posts");

  if (!response.ok) {
    throw new Error("Failed to get blog posts");
  }

  const data = await response.json();
  return data;
};

export const addBlogPost = async (data) => {
  const response = await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to get blog posts");
  }

  return response.json();
};
