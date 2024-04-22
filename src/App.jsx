import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UpdatePage from "./pages/UpdatePage";
import Layout from "./layout";
import { useEffect } from "react";
import { getCondition } from "./network/request";
import { setCondition } from "./redux/slices/conditionSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const runGetCondition = async (day = 0) => {
    let res = await getCondition();
    dispatch(setCondition(res));
  };

  useEffect(() => {
    runGetCondition();
  }, [runGetCondition]);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/u" element={<UpdatePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
