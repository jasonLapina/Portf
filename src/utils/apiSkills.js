import supabase from "./supabase";
export default async function getSkills() {
  const { data, error } = await supabase.from("skills").select(`*`);

  return data;
}
