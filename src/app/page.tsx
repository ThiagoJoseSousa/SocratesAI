import Image from "next/image";
import { assert } from "./test";
import { Caesar_Dressing } from "next/font/google";
import style from "./home.module.css";

const greek = Caesar_Dressing({ subsets: ["latin"], weight: "400" });

export default function Home() {
  assert(1 + 1 == 2, "return 2");
  return (
    <main>
      <section id="Hero" className="h-screen mb-4 overflow-hidden">
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
              "mx-4 text-5xl md:text-7xl lg:text-8xl  md:leading-normal text-yellow-200 md:text-black" +
              " " +
              greek.className
            }
          >
            Know yourself With Socrates
          </h1>
          <button className="text-2xl md:text-4xl text-white">Talk</button>
        </div>
      </section>
      <section
        id="Benefits"
        className=" p-4 rounded-md max-w-2xl mx-4 md:mx-auto mb-4 bg-gray-300 leading-normal"
      >
        <div className="flex items-center justify-center">
          <h2 className="font-bold text-center text-2xl mb-2">
            Science and the Socratic Method
          </h2>
        </div>
        <hr className="my-4" />
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
          <li>
            <p>
              <strong>Enhanced Critical Thinking:</strong>
            </p>
            <p>
              {" "}
              <span className="text-lime-700 font-medium">
                +25% to +40%
              </span>{" "}
              Impact.
            </p>
          </li>
          <li>
            <p>
              <strong>Improved Problem-Solving Abilities :</strong>
            </p>
            <p>
              {" "}
              <span className="text-lime-700 font-medium">Up to +30% </span>
              Enhancement.
            </p>
          </li>
          <li>
            <p>
              <strong>Increased Engagement and Participation:</strong>
            </p>
            <p>
              {" "}
              <span className="text-lime-700 font-medium">
                +20% to +50%
              </span>{" "}
              Uplift.
            </p>
          </li>
          <li>
            <p>
              <strong>Development of Communication Skills:</strong>
            </p>
            <p>
              {" "}
              <span className="text-lime-700 font-medium">Approx. +30% </span>
              Improvement.
            </p>
          </li>
        </ol>
      </section>
      <section
        id="How-it-works"
        className="max-w-2xl mx-4 md:mx-auto align-center gap-14 bg-gray-300 p-4 rounded-md"
      >
        <h2
          className={`font-bold uppercase text-2xl mb-2 ${greek.className} text-center`}
        >
          The Socratic Method
          <div className={`${style.infinity} mx-auto`}></div>
          <hr className="my-4" />
        </h2>
        <ol className="grid gap-7">
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

      <section id="CTA" className={"flex max-w-2xl mx-auto my-8 " + style.weave}>
        <span>
          Click aside, on the vertical image to embark on a meaningful journey
          of self-discovery and
        </span>
        <button>
        <Image src="/greekPattern.svg" width={62} height={68} alt="greek pattern" />
        Talk
        </button>
      </section>

      <section id="Awards" className="max-w-2xl mx-auto">
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
