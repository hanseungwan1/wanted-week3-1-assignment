import axios from "axios";

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

export async function getGitHubData(
  owner: string,
  repo: string,
  path: string = ""
) {
  if (path !== "") path = "/" + path;
  const BASE_URL = `https://api.github.com/repos/${owner}/${repo}${path}`;
  console.log(BASE_URL);
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: `token ${ACCESS_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
// https://api.github.com/repos/facebook/react
