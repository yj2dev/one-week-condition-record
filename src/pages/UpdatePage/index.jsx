import { useNavigate, useSearchParams } from "react-router-dom";
import { Container } from "./styled";
import { IoArrowBackOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import EditStar from "../../components/EditStar";
import { getDayOfWeek } from "../../utils/format";
import useTimeout from "../../hooks/useTimeout";
import { hideAlert, showAlert } from "../../redux/slices/alertSlice";

const UpdatePage = () => {
  const navigate = useNavigate();
  const conditionState = useSelector((state) => state.conditionSlice);
  const [condition, setCondition] = useState({});
  const [params] = useSearchParams();

  const getCondition = () => {
    const res = conditionState.conditionList.find(
      (item) => item.id === params.get("pid"),
    );

    return res;
  };

  useEffect(() => {
    setCondition(getCondition());
  }, []);

  return (
    <Container>
      <h1>{getDayOfWeek(condition?.date)}요일 평점 매기기</h1>
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
