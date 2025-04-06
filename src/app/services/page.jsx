import Banner from "@/components/Banner";
import Ourclient from "@/components/ourclient";
import Ourstory from "@/components/ourstory";
import Whatwedo from "@/components/whatwedo";
import {
  CirclePlay,
  Cog,
  Factory,
  FactoryIcon,
  LucideFactory,
  Phone,
  Settings,
  Star,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <Banner title={"Services"} />
      <Ourstory />
      <Whatwedo />
      <Ourclient />
    </>
  );
};

export default Page;
