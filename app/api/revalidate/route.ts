import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

async function Handler() {
  revalidatePath("/", "layout");
  return NextResponse.json("😍", { status: 200 });
}

export { Handler as GET, Handler as POST };
