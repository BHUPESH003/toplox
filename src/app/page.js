import About from "@/components/about";
import Header from "@/components/header";
import Ourclient from "@/components/ourclient";
import Ourprocess from "@/components/ourprocess";
import Ourstory from "@/components/ourstory";
import Ourwork from "@/components/ourwork";
import Services from "@/components/services";
import Whatwedo from "@/components/whatwedo";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Ourstory />
      <Whatwedo />
      <Ourwork />
      <Ourprocess />
      <Ourclient />
    </>
  );
}
