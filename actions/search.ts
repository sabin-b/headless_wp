"use server";

import { redirect } from "next/navigation";

export async function searchFilter(form: FormData) {
  const data = Object.fromEntries(form);
  const { query } = data;


  const searchParams = new URLSearchParams({
    ...(query && { search: query.toString().trim() }),
  });

  redirect(`/buying/all-properties?${searchParams.toString()}`);
}
