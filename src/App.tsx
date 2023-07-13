import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/common/Layout";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <ListPage />
          </Layout>
        }
      />
      <Route
        path="/detail"
        element={
          <Layout>
            <DetailPage />
          </Layout>
        }
      />
      <Route
        path="/error"
        element={
          <Layout>
            <ErrorPage />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
