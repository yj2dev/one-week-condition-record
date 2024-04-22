import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UpdatePage from "./pages/UpdatePage";
import Layout from "./layout";
import { useEffect, useRef } from "react";
import { getCondition } from "./network/request";
import { setCondition, updateRate } from "./redux/slices/conditionSlice";
import { useDispatch, useSelector } from "react-redux";
import Alert from "./components/Alert";

function App() {
  const dispatch = useDispatch();
  const alertState = useSelector((state) => state.alertSlice);

  const runGetCondition = async (day = 0) => {
    let res = await getCondition();
    dispatch(setCondition(res));
  };

  useEffect(() => {
    runGetCondition();
  }, [runGetCondition]);

  return (
    <Router>
      <Alert show={alertState?.show} content={alertState?.content} />
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
