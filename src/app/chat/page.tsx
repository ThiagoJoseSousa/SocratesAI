'use client';

import Link from "next/link";
import style from "../chat/chat.module.css";
import { greek } from "../page";
import { useEffect, useState, useRef } from "react";
import { fetchData } from "./async";

function Chat() {
  const [useMessageState, setMessageState] = useState<string>();

  useEffect(() => {
    fetchData();
  }, [useMessageState]);

  return (
    <>
      <div className="fixed items-center flex top-4 left-4 z-50">
        <Link href="../" className="flex">
          <div className={style.pointer}></div>
          <div className={style.pointer}></div>
        </Link>
        <h2 className={`${greek.className} text-2xl ml-4`}>SOCRATES AI</h2>
      </div>
      <section className="bg-white flex flex-col-reverse items-center justify-center relative h-screen w-full">
        <div id="chat-container" className="relative w-full h-5/6">
          <div id="chat" className="h-full flex items-center overflow-y-scroll">
            <span className="block w-full text-center">Placeholder</span>
            {/* take message from https://codepen.io/AllThingsSmitty/pen/jommGQ */}
          </div>
          <div className="absolute -bottom-12 left-0 right-0 flex justify-center">
            <form
              onSubmit={(e) =>{
                e.preventDefault();
                alert('submiting')
                setMessageState((e.target as HTMLInputElement).value)
              }
              }
            >
              <input
                type="text"
                name=""
                id=""
                placeholder="Tell me anything..."
              />
              <button type="submit">➡</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Chat;
