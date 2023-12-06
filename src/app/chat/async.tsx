import { config } from "dotenv";
import { useEffect, useState, useRef } from "react";
import Chat from "./page";

config();

// pseudo-code:
/*
    I will use localStorage to store chat messages.
*/

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
    return error.message;
  }
}

function ChatState() {
  const requestBody = useRef({
    providers: "openai",
    text: "Hello i need your help ! ",
    chatbot_global_action:
      "This chat you'll be using the socratic method. By this, I mean that your job is asking questions to: Clarify thinking, challenge assumptions, use evidence in arguments, explore alternative perspectives, consider the consequences, and question the questions. The user is the one who'll know things, you will not give any help, just question. ",
    previous_history: [],
    temperature: 0.0,
    max_tokens: 150,
    fallback_providers: "",
  });

  const [allMessagesState, setAllMessagesState] = useState<string[]>([]); //even number for user, odd number for ai

  const [useMessageState, setMessageState] = useState("");

  useEffect(() => {
    function storeMessage(message: string) {
      setAllMessagesState((prev) => [...prev, message]);
    }
    (async () => {
      storeMessage(useMessageState);
      const requestObj = requestBody.current;
      requestObj.text = useMessageState;
      options.body = JSON.stringify(requestObj);
      const aiResponse = await fetchData();
      storeMessage(aiResponse);
    })();
  }, [useMessageState]);

  return (
    <Chat
      setMessageState={setMessageState}
      allMessagesState={allMessagesState}
    />
  );
}

export { fetchData, ChatState };
