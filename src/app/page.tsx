import Image from "next/image";
// import Auth from "@/pages/auth";
import Main from "@/app/main/page";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    // redirect('/main')
    <Main></Main>
  );
}
