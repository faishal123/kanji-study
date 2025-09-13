import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const supabase = createClient(
    process.env.SUPABASE_URL || "",
    process.env.SUPABASE_ANON_KEY || ""
  )

  const { data } = await supabase.rpc('get_random_paragraphs_entry')

  return Response.json(data?.[0]?.paragraph || {})
}