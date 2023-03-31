// /movies/123
import { useRouter } from "next/router";

export default function Detaile() {
  const router = useRouter();
  console.log(router);
  console.log(router.query.id);
  return "detail";
}
