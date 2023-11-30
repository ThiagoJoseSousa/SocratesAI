import Image from "next/image"

export default function Home() {
  return (
    <main>
      <section id="Hero" className="h-screen bg-image-before bg-image-after relative">
        <Image src="/Socrates-back.webp" className="absolute block h-screen object-cover" priority alt="Hero background"  width={1920} height={1097}/>
        <h1 className="absolute">Socrates</h1>
        <Image src="/Socrates-front.webp" className="absolute block h-screen object-cover" priority alt="Hero Socrates"  width={1920} height={1097}/>
        <Image src="/Socrates-mobile.webp" className="absolute block h-screen object-cover object-right" alt="Socrates receives a notification." width={1792} height={2304}/>

      </section>
    </main>
  )
}
