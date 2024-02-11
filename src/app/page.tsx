import Bento from "@/components/Bento/Bento";
import Greeting from "@/components/Greeting/Greeting";

/**
 * Renders the Home component.
 * @return {JSX.Element} The rendered Home component.
 */
export default function Home() {
  return (
    <main className="flex  justify-center xs:items-center ">
      <div className="mt-2">
        <Bento />
      </div>
    </main>
  );
}
