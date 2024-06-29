import { revalidatePath } from "next/cache";

async function Handler() {
  revalidatePath("/", "layout");
}

export { Handler as GET, Handler as POST };
