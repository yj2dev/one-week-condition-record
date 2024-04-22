import { Container, FaRegStarIcon, FaStarIcon } from "./styled";
import { formatToMMDD, getDayOfWeek } from "../../utils/format";
import { useDispatch, useSelector } from "react-redux";
import { updateRate } from "../../redux/slices/conditionSlice";
import { useEffect, useRef } from "react";
import { hideAlert, showAlert } from "../../redux/slices/alertSlice";

const EditStar = ({ condition, setCondition }) => {
  const dispatch = useDispatch();

  const alertState = useSelector((state) => state.alertSlice);

  const timerRef = useRef(null);

  console.log("condition >> ", condition);

  const showRateAlert = (message) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    dispatch(showAlert(message));

    timerRef.current = setTimeout(() => {
      dispatch(hideAlert());
    }, 2000);
  };

  const onChangeStar = (index) => {
    setCondition({ ...condition, rate: index });

    if (condition.rate !== index) {
      showRateAlert(`${index}점으로 변경되었습니다. 평점을 저장해주세요`);
    }
  };

  const onClickSave = () => {
    const payload = { id: condition.id, rate: condition.rate };
    console.log("payload >> ", payload);

    dispatch(updateRate(payload));
    showRateAlert(
      `${formatToMMDD(condition.date)} 컨디션이 ${condition.rate}점으로 저장되었습니다.`,
    );
  };

  const onKeyDown = (e) => {
    const enableKeyList = ["0", "1", "2", "3", "4", "5"];

    if (enableKeyList.includes(e.key)) {
      onChangeStar(parseInt(e.key, 10));
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <Container>
      <section className="edit-star">
        {[...new Array(5)].map((item, index) =>
          condition?.rate > index ? (
            <FaStarIcon onClick={() => onChangeStar(index + 1)} />
          ) : (
            <FaRegStarIcon onClick={() => onChangeStar(index + 1)} />
          ),
        )}
      </section>

      <div className="date">
        {getDayOfWeek(condition?.date)}&nbsp;
        <span>{formatToMMDD(condition?.date)}</span>
      </div>

      <button className="save-btn" onClick={onClickSave}>
        저장하기
      </button>
    </Container>
  );
};

export default EditStar;
