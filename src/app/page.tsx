import Container from "@/components/Container/Container"

/**
 * Renders the Home component.
 * @return {JSX.Element} The rendered Home component.
 */
export default function Home() {
  return (
    <>
     <Container>
     <section className="shadow-md bg-gray-200 flex flex-col  mt-24 h-36 w-96 rounded-3xl  ">
      <div className=" m-4">
         <h1 className="text-left text-1xl font-black ">Bespoken develoment</h1>
       <p className="py-2 font-thin">The Issues panel now warns you about the cookies that will be affected </p>
       <button className="relative inline-flex font-normal" type="button">Learn more</button>
      </div>
     </section>
  
     </Container>

   
   </>

  )
}
