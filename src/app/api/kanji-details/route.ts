import { createClient } from "@supabase/supabase-js";
import { type NextRequest } from "next/server";

const databaseKey: Record<string, string> = {
  n5: "n5-kanji-details",
  n4: "n4-kanji-details",
  n3: "n3-kanji-details",
  n2: "n2-kanji-details",
  n1: "n1-kanji-details",
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const kanji = searchParams.get("kanji");
  const level = searchParams.get("level");

  const supabase = createClient(
    process.env.SUPABASE_URL || "",
    process.env.SUPABASE_ANON_KEY || ""
  );

  const { data } = await supabase
    .from(databaseKey[level || "n5"])
    .select("*")
    .eq("kanji", kanji)
    .single();

  return Response.json(data);
}
