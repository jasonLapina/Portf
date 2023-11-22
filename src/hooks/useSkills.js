import { useQuery } from "react-query";
import getSkills from "../utils/apiSkills";

export default function useSkills() {
  const { data, isLoading } = useQuery({
    queryFn: getSkills,
    queryKey: "skills",
  });

  return { data, isLoading };
}
