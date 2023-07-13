import { useEffect, useState } from "react";
import { getGitHubData } from "../api/fetch";
import { useNavigate } from "react-router-dom";

export default function ListPage() {
  const [isLoding, setIsLoding] = useState(true);
  const [listData, setListData] = useState([]);
  const [headerTitle, setHeaderTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoding(true);
        const title = await getGitHubData("facebook", "react");
        const data = await getGitHubData("facebook", "react", "issues");
        setListData(data);
        setIsLoding(false);
        setHeaderTitle(title.full_name);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <>{headerTitle}</>
      {isLoding ? (
        <div>로딩중입니다</div>
      ) : (
        listData.map(
          (
            el: {
              body: string;
              title: string;
              number: string;
              user: any;
              created_at: string;
              comments: string;
            },
            i: number
          ) => (
            <div key={el.number}>
              <div>{"#" + el.number}</div>
              <div>{el.title}</div>
              <div>{"작성자: " + el.user.login}</div>
              <div>{"작성일: " + el.created_at}</div>
              <div>{"코멘트: " + el.comments}</div>
            </div>
          )
        )
      )}
    </div>
  );
}
