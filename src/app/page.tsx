import Greeting from "@/components/Greeting/Greeting"

/**
 * Renders the Home component.
 * @return {JSX.Element} The rendered Home component.
 */
export default function Home() {

  return (
   <main className=" flex min-h-screen flex-col items-center justify-center">
    <Greeting/>
   </main>

  )
}
