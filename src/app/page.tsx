import Image from "next/image"
import { assert } from "./test"
import { Caesar_Dressing } from "next/font/google";

const greek = Caesar_Dressing({subsets: ['latin'], weight:'400'});

export default function Home() {

  assert(1+1==2, 'return 2');
  return (
    <main>
      <section id="Hero" className="h-screen overflow-hidden">
        <Image src="/Socrates-desktop.webp" className="absolute hidden md:block h-screen object-cover" priority alt="Hero background"  width={2688} height={1536}/>
        <Image src="/Socrates-mobile.webp" className="absolute block md:hidden h-screen object-cover" alt="Socrates receives a notification." width={1792} height={2304}/>
        <div className="absolute bottom-4 left-0 right-0 md:top-2/4 md:left-2/4 md:-translate-y-1/2">
        <h1 className={"text-5xl md:text-7xl lg:text-8xl text-center md:leading-normal text-yellow-200 md:text-black" + " " + greek.className}>
          Know yourself With Socrates
        </h1>
        <button className="">Talk</button>
        </div>
      </section>
      <section id="Features">
        <h1>FEATURE</h1>
        <p>
        The unique experience of engaging with this chatbot lies in its emulation of the Socratic method—a method revered for its ability to unravel the layers of one's beliefs and perceptions. 
        Through a series of incisive inquiries, it encourages one to confront their assumptions, probe the depths of their convictions, and traverse the labyrinth of thought.
        </p>
      </section>
    </main>
  )
}
