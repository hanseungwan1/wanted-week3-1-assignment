import axios from "axios";
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

export async function getIssueData(owner: string, repo: string) {
  const BASE_URL = `https://api.github.com/repos/${owner}/${repo}/issues`;
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: `token ${ACCESS_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });
    console.log(response.data); // 이슈 데이터
    let result = await response.data;
    return result;
  } catch (error) {
    console.error(error);
  }
}
