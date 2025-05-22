"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";

export default function Home() {
  const user = useUser();
  console.log(user);
  return (
    <div className="">
      <Button>click</Button>
    </div>
  );
}
