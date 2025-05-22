import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/services/AuthService";

export default async function Home() {
  const user = await getCurrentUser()
  console.log(user)
  return (
    <div className="">
      <Button>click</Button>
    </div>
  );
}
