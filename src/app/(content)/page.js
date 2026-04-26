import NewsContainer from "@/Component/ForMain Content/NewsContainer";
import TextAnimate from "@/Component/ForMain Content/TextAnimate";
import Navbar from "@/Component/Shared Ui/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="space-y-8 container mx-auto">
    <TextAnimate></TextAnimate>
    <Navbar></Navbar>
    <NewsContainer></NewsContainer>



    </div>
    </>

  );
}
