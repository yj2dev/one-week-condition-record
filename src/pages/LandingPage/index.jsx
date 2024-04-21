import { useEffect, useRef, useState } from "react";
import RateComponent from "../../components/Rate";
import {
  IoArrowBackOutline,
  IoArrowForwardOutline,
  IoHappyOutline,
} from "react-icons/io5";
import { Container } from "./styled";
import { useSelector } from "react-redux";
import { mappedOneWeekList } from "../../utils/format";

const LandingPage = () => {
  const dayRef = useRef(0);
  const [conditionList, setConditionList] = useState([]);
  const conditionStateList = useSelector(
    (state) => state.conditionSlice.conditionList,
  );

  useEffect(() => {
    setConditionList(mappedOneWeekList(conditionStateList));
  }, [conditionStateList]);

  const onChangePage = (day = 0) => {
    dayRef.current = day ? dayRef.current + day : 0;

    setConditionList(mappedOneWeekList(conditionStateList, dayRef.current));
  };

  return (
    <Container>
      <h1>일주일 컨디션</h1>
      <section className="btn-container">
        <button className="back" onClick={() => onChangePage(-7)}>
          <IoArrowBackOutline />
        </button>
        <button className="now" onClick={() => onChangePage()}>
          <IoHappyOutline />
        </button>
        <button className="forward" onClick={() => onChangePage(7)}>
          <IoArrowForwardOutline />
        </button>
      </section>
      <RateComponent list={conditionList} />
    </Container>
  );
};

export default LandingPage;
