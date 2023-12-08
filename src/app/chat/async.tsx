const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${process.env.API_KEY}`,
  },
  body: "",
};

async function fetchData() {
  try {
    const response = await fetch(
      "https://api.edenai.run/v2/text/chat",
      options
    );
    const data = await response.json();
    return data;
  } catch (error: any) {
    return `Error: ${error.message}`;
  }
}

export { fetchData, options };
