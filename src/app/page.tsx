import Image from "next/image";
import { assert } from "./test";
import { Caesar_Dressing } from "next/font/google";

const greek = Caesar_Dressing({ subsets: ["latin"], weight: "400" });

export default function Home() {
  assert(1 + 1 == 2, "return 2");
  return (
    <main>
      <section id="Hero" className="h-screen overflow-hidden">
        <Image
          src="/Socrates-desktop.webp"
          className="absolute hidden md:block h-screen object-cover"
          priority
          alt="Hero background"
          width={2688}
          height={1536}
        />
        <Image
          src="/Socrates-mobile.webp"
          className="absolute block md:hidden h-screen object-cover"
          alt="Socrates receives a notification."
          width={1792}
          height={2304}
        />
        <div className="absolute bottom-4 left-0 right-0 md:top-2/4 md:left-2/4 md:-translate-y-1/2 text-center">
          <h1
            className={
              "text-5xl md:text-7xl lg:text-8xl  md:leading-normal text-yellow-200 md:text-black" +
              " " +
              greek.className
            }
          >
            Know yourself With Socrates
          </h1>
          <button className="text-2xl md:text-4xl text-white">Talk</button>
        </div>
      </section>
      <section id="Benefits">
        <h2 className="font-bold">
          Benefits of the Socratic Method Backed by Research
        </h2>
        <ol>
          <li>
            <strong>Enhanced Critical Thinking:</strong> +25% to +40% Impact.
          </li>
          <li>
            <strong>Improved Problem-Solving Abilities :</strong> Up to +30%
            Enhancement.
          </li>
          <li>
            <strong>Increased Engagement and Participation:</strong> +20% to
            +50% Uplift.
          </li>
          <li>
            <strong>Development of Communication Skills:</strong> Approx. +30%
            Improvement.
          </li>
        </ol>
      </section>
      <section id="How-it-works">
        <h2 className="font-bold">
          How the Socratic Method AI Chatbot Works
        </h2>
        <ol>
          <li>
            <strong>Initiate:</strong> Simply start the conversation by
            accessing the chat interface.
          </li>
          <li>
            <strong>Questioning:</strong> The Socrates chatbot will prompt you
            with thought-provoking inquiries, inviting you to explore and
            articulate your thoughts.
          </li>
          <li>
            <strong>Reflection:</strong> Embrace the maieutic method as you
            ponder the chatbot's questions and delve into deeper
            self-reflection.
          </li>
          <li>
            <strong>Intellectual Exchange:</strong> Enjoy a dynamic exchange of
            ideas, where each response from the chatbot fosters a deeper
            understanding of yourself and the subject matter.
          </li>
          <li>
            <strong>Growth:</strong> Through this dialectical process, nurture
            your critical thinking and embark on a path of intellectual
            exploration and enlightenment.
          </li>
        </ol>
      </section>

      <section id="CTA"></section>

      <section id="">
        <p>
          Socratic philosophy has spawned an extensive library of over 5,000
          books, essays, and scholarly works dedicated to unraveling,
          interpreting, and building upon the teachings and dialogues associated
          with Socrates. These works encompass a wide array of analyses,
          commentaries, and philosophical interpretations, showcasing the
          enduring impact of Socratic thought on humanity's intellectual
          journey.
        </p>
      </section>
    </main>
  );
}
