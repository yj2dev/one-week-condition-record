import { useNavigate, useSearchParams } from "react-router-dom";
import { Container } from "./styled";
import { IoArrowBackOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import EditStar from "../../components/EditStar";

const UpdatePage = () => {
  const navigate = useNavigate();
  const conditionState = useSelector((state) => state.conditionSlice);
  const [condition, setCondition] = useState({});

  const [params] = useSearchParams();

  const getCondition = () => {
    const res = conditionState.conditionList.find(
      (item) => item.id === parseInt(params.get("pid")),
    );
    return res;
  };

  useEffect(() => {
    setCondition(getCondition());
  }, []);

  return (
    <Container>
      <h1>요일 평점 매기기</h1>
      <section className="btn-container">
        <button onClick={() => navigate(-1)}>
          <IoArrowBackOutline />
        </button>
      </section>
      <EditStar condition={condition} setCondition={setCondition} />
    </Container>
  );
};

export default UpdatePage;
