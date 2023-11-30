import Image from "next/image"

export default function Home() {
  return (
    <main>
      <section id="Hero" className="h-screen bg-image-before bg-image-after">
        <Image src="/Socrates-desktop.webp" className="hidden md:block h-screen object-cover" priority alt="Hero background"  width={2688} height={1536}/>
        <h1 className="absolute ">Socrates</h1>
        <Image src="/Socrates-mobile.webp" className="block md:hidden h-screen object-cover object-right" alt="Socrates receives a notification." width={1792} height={2304}/>
      </section>
    </main>
  )
}
