import Image from "next/image";
import { Caesar_Dressing } from "next/font/google";
import style from "./home.module.css";
import Footer from "./footer";
import Link from "next/link";

export const greek = Caesar_Dressing({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <>
      <main>
        <section id="Hero" className="h-[50vh] mb-4 overflow-hidden relative">
          <Image
            src="/Socrates-desktop.webp"
            className=" hidden md:block h-full object-cover"
            priority
            alt="Hero background"
            width={2688}
            height={1536}
          />
          <Image
            src="/Socrates-mobile.webp"
            className="object-top block md:hidden h-full object-cover"
            alt="Socrates receives a notification."
            width={1792}
            height={2304}
          />
        </section>
        <section
          id="CTA"
          className={
            "p-4 flex flex-col max-w-2xl mx-4 sm:mx-auto my-4 bg-gray-300 rounded-md"
          }
        >
          <h1 className={`${greek.className} text-center text-2xl`}>
            Socrates AI: Know thyself
          </h1>
          <hr className="my-4" />
          <div className={`${style.book} mb-4 mx-auto`}>
            <span className={`${style.page} ${style.turn}`}></span>
            <span className={`${style.page} ${style.turn}`}></span>
            <span className={`${style.page} ${style.turn}`}></span>
            <span className={`${style.page} ${style.turn}`}></span>
            <span className={`${style.page} ${style.turn}`}></span>
            <span className={`${style.page} ${style.turn}`}></span>
            <span className={`${style.cover}`}></span>
            <span className={`${style.page}`}></span>
            <span className={`${style.cover} ${style.turn}`}></span>
          </div>

          <Link href="/chat" className="mx-auto my-5 py-4 px-12 bg-blue-400 uppercase rounded-lg font-semibold">
            Initiate
          </Link>
        </section>

        <section
          id="How-it-works"
          className="max-w-2xl mx-4 sm:mx-auto align-center gap-14 bg-gray-300 p-4 rounded-md mb-2"
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
              <strong>Intellectual Exchange:</strong> Enjoy a dynamic exchange
              of ideas, where each response from the chatbot fosters a deeper
              understanding of yourself and the subject matter.
            </li>
            <li>
              <strong>Growth:</strong> Through this dialectical process, nurture
              your critical thinking and embark on a path of intellectual
              exploration and enlightenment.
            </li>
          </ol>
        </section>
        <section
          id="Benefits"
          className=" p-4 rounded-md max-w-2xl mx-4 sm:mx-auto mb-4 bg-gray-300 leading-normal"
        >
          <div className="flex items-center justify-center">
            <h2 className={`font-bold text-center text-2xl mb-2 ${greek.className}`}>
            Science: Socratic Benefits. Add Stress/anxiety benefits.
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
        {/* <section id="Awards" className="max-w-2xl mx-auto">
        <p>
          Socratic philosophy has spawned an extensive library of over 5,000
          books, essays, and scholarly works dedicated to unraveling,
          interpreting, and building upon the teachings and dialogues associated
          with Socrates. These works encompass a wide array of analyses,
          commentaries, and philosophical interpretations, showcasing the
          enduring impact of Socratic thought on humanity's intellectual
          journey.
        </p>
      </section> */}
      </main>
      <Footer />
    </>
  );
}

