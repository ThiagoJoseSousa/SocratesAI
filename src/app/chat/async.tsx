import { config } from "dotenv";

config();

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${"a"}`,
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
    return data.openai.generated_text;
  } catch (error: any) {
    return `Error: ${error.message}`;
  }
}

export { fetchData, options };
