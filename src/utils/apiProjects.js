import supabase from "./supabase";
export default async function getProjects() {
  const { data } = await supabase.from("projects").select(`*`);

  return data;
}
