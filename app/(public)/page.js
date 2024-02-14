import About_work from "@/components/About_work";
import Advantage from "@/components/Advantage";
import Cars from "@/components/Cars";
import Hero from "@/components/Hero";
import Informations from "@/components/Information";
import Locations from "@/components/Locations";
import Loading from "./loading";



export default function Home() {
  return (
<>
<main>
<Hero/>
<Locations/>
  {/* <Loading/> */}
<About_work/>
<Cars/>
<Informations/>
<Advantage/>
</main>
</>
  );
}
