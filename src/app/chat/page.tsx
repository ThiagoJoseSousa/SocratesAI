"use client";

import Link from "next/link";
import style from "../chat/chat.module.css";
import { greek } from "../page";
import { Dispatch, SetStateAction, useState, useEffect, useRef } from "react";
import { options, fetchData } from "./async";

interface ChatProps {
  setMessageState: Dispatch<SetStateAction<string>>;
  allMessagesState: string[];
}
interface RequestBody {
  providers: string;
  text: string;
  chatbot_global_action: string;
  previous_history: {}[];
  temperature: number;
  max_tokens: number;
  fallback_providers: string;
}

function ChatState() {
  const requestBody = useRef<RequestBody>({
    providers: "openai",
    text: "Hello i need your help ! ",
    chatbot_global_action:
      "Talk like Socrates.Focus on the individual's beliefs and thoughts and ask one question at a time. The aim of the questions are to make the user 1. Clarify thinking, 2. Question their beliefs, 3. Question their evidence, 4. Explore alternative perspectives, 5. Imagine consequences. Don't add information to the user, just ask.",
    previous_history: [],
    temperature: 0.0,
    max_tokens: 150,
    fallback_providers: "",
  });

  interface PreviousHistoryObj {
    role: string;
    message: string;
  }

  const [allMessagesState, setAllMessagesState] = useState<string[]>([]); //even number for user, odd number for ai
  const [useMessageState, setMessageState] = useState("");
  const previousHistory = useRef<PreviousHistoryObj[]>([]);

  useEffect(() => {
    function storeMessage(message: string) {
      setAllMessagesState((prev) => [...prev, message]);
    }

    function recordTalk(lastTalk: []) {
      if (lastTalk) {
        previousHistory.current = [...previousHistory.current, ...lastTalk];
      }
    }

    async function exchangeMessages() {
      storeMessage(useMessageState);
      const requestObj = requestBody.current;
      requestObj.text = useMessageState;
      options.body = JSON.stringify(requestObj);
      const data = await fetchData();
      const { generated_text, message } = data.openai;
      recordTalk(message);
      requestObj.previous_history = previousHistory.current;
      storeMessage(generated_text);
      setMessageState("");
    }
    if (useMessageState) {
      exchangeMessages();
    }
  }, [useMessageState]);

  return (
    <Chat
      setMessageState={setMessageState}
      allMessagesState={allMessagesState}
    />
  );
}

function Chat({ setMessageState, allMessagesState }: ChatProps) {
  const [messagesDivs, setMessagesDivs] = useState<React.JSX.Element[]>();
  const [waitingRequest, setWaitingRequest] = useState<Boolean>(false);
  const chatDiv = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const arr = allMessagesState?.map((message, i) => (
      <div
        key={i}
        className={
          i % 2 == 0
            ? `bg-blue-600 rounded-md text-white p-4 self-end m-4 max-w-prose break-all ml-8 ${
                i == 0 && "mt-auto"
              }`
            : "bg-gray-300 rounded-md text-black p-4 self-start m-4 max-w-prose break-all mr-8"
        }
      >{`${message}`}</div>
    ));
    setMessagesDivs(arr);
    setWaitingRequest(false);
  }, [allMessagesState]);

  useEffect(() => {
    const element = chatDiv.current;
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }, [messagesDivs]);

  return (
    <>
      <div className="fixed items-center flex top-4 left-4 z-50">
        <Link href="../" className="flex">
          <div className={style.pointer}></div>
          <div className={style.pointer}></div>
        </Link>
        <h2 className={`${greek.className} text-2xl ml-4`}>SOCRATES AI</h2>
      </div>
      <section className="bg-white flex flex-col-reverse items-center justify-center relative h-screen w-full ">
        <div id="chat-container" className="relative w-full h-5/6">
          <div
            id="chat"
            className={`h-full flex flex-col w-full overflow-y-auto max-w-4xl mx-auto ${
              !messagesDivs?.length && "justify-center"
            }`}
            ref={chatDiv}
          >
            {!messagesDivs?.length && (
              <div className="self-center bg-gray-300 rounded-md text-black p-4 m-4 sm:mx-auto max-w-2xl">
                <div className="rounded-md text-white bg-blue-600 text-5xl mx-auto w-fit">
                  ∞
                </div>
                <hr className="my-4" />
                <div>
                  Ah, seeker of wisdom, might you begin by sharing your thoughts
                  or definition on a subject of interest?
                </div>
              </div>
            )}
            {messagesDivs}
          </div>
        </div>{" "}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formElement = (e.target as HTMLFormElement)
                .elements[0] as HTMLInputElement;
              const value = formElement?.value;
              if (!waitingRequest && value) {
                setMessageState(value);
                setWaitingRequest(true);
              }
            }}
            className="border border-black flex w-full m-4 sm:max-w-2xl rounded-md overflow-hidden bg-white"
          >
            <input
              type="text"
              className="p-4 w-full"
              placeholder="Tell me anything..."
            />
            {waitingRequest ? (
              <div className={`${style.loader} m-4`}></div>
            ) : (
              <button type="submit" className="p-4">
                ✉︎
              </button>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default ChatState;
