"use server";
import { cookies } from "next/headers";

export const createShop = async (data: FormData) => {
  console.log(data,'index 5')
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/shop`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: data,
    });
    console.log(res,'res index13')
    return res.json();
  } catch (err: any) {
    console.log(err,'index create shop 15')
    return Error(err);
  }
};
