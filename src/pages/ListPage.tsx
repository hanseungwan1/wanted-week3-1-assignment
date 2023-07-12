import { getIssueData } from "../api/fetch";

export default function ListPage() {
  const data = getIssueData("facebook", "react");
  console.log(data);

  return <div>리스트페이지</div>;
}
