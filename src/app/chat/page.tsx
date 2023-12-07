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

function ChatState() {
  const requestBody = useRef({
    providers: "openai",
    text: "Hello i need your help ! ",
    chatbot_global_action:
      "This chat you'll be using the socratic method. Your job is asking questions to: Clarify thinking, challenge assumptions, use evidence in arguments, explore alternative perspectives, consider the consequences, and question the questions. The user is the one who'll know things, you will not give any help, just question. ",
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
    async function exchangeMessages () {
      storeMessage(useMessageState);
      const requestObj = requestBody.current;
      requestObj.text = useMessageState;
      options.body = JSON.stringify(requestObj);
      const aiResponse = await fetchData();
      storeMessage(aiResponse);
      setMessageState('')
    }
    if(useMessageState){
      exchangeMessages()
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
      <div key={i} className={i % 2 == 0 ? 'bg-blue-600 rounded-md text-white p-4 self-end m-4 max-w-prose break-all' : 'bg-gray-300 rounded-md text-black p-4 self-start m-4 max-w-prose break-all'}>{`${message}`}</div>
    ));
    setMessagesDivs(arr);
    setWaitingRequest(false);
  }, [allMessagesState]);

  useEffect(()=>{
    const element= chatDiv.current;
    if(element){
      element.scrollTop = element.scrollHeight
    }
  },messagesDivs)

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
          <div id="chat" className="h-full flex flex-col w-full overflow-y-auto justify-center " ref={chatDiv}>
            {!messagesDivs?.length && (
              <div className="justify-self-center self-center bg-gray-300 rounded-md text-black p-4 m-4 sm:mx-auto max-w-2xl">
                <div className="rounded-md text-white bg-blue-600 text-5xl mx-auto w-fit">∞</div>
                <hr className="my-4"/>
                <div>Ah, seeker of wisdom, might you begin by sharing your
                thoughts or definition on a subject of interest?</div>
              </div>
            )}
            {messagesDivs}
          </div>

        </div>          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formElement = (e.target as HTMLFormElement)
                .elements[0] as HTMLInputElement;
                const value = formElement?.value;
                if(!waitingRequest && value){
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
                <button type="submit" className="p-4">✉︎</button>
              )}
            </form>
          </div>
      </section>
    </>
  );
}



export default ChatState;
