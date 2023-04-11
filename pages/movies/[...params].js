// /movies/123
import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detaile({ params }) {
  const router = useRouter();
  const [title, id] = params || [];

  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

// server side rendering 으로 검색엔진에서 빈 html만 검색하지않고 상세페이지 마다
// 해당영화의 제목이 실제로 삽입된 html을 인덱싱해놓을 수 있다
// 이전 소스는 index에서 받아온 변수로 클라이언트에서 제목을 표시해주지만
// 서버사이드렌더링을 하면서 서버에서 해당 영화의 제목을 넣어서 html을 리턴한다.
// 여기서 props 객체가 위의 Detail펑션의 파라미터로 들어감.
export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
