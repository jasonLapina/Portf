import { useQuery } from "react-query";
import getProjects from "../utils/apiProjects";

export default function useProjects() {
  const { data, isLoading } = useQuery({
    queryFn: getProjects,
    queryKey: "projects",
  });

  return { data, isLoading };
}
