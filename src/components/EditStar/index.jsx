import { Container, FaRegStarIcon, FaStarIcon } from "./styled";
import { formatToMMDD, getDayOfWeek } from "../../utils/format";
import { useDispatch } from "react-redux";
import { updateRate } from "../../redux/slices/conditionSlice";

const EditStar = ({ condition, setCondition }) => {
  const dispatch = useDispatch();

  const onClickStar = (index) => {
    setCondition({ ...condition, rate: index + 1 });
  };

  const onClickSave = () => {
    const payload = { id: condition.id, rate: condition.rate };
    dispatch(updateRate(payload));
  };

  return (
    <Container>
      <section className="edit-star">
        {[...new Array(5)].map((item, index) =>
          condition.rate > index ? (
            <FaStarIcon onClick={() => onClickStar(index)} />
          ) : (
            <FaRegStarIcon onClick={() => onClickStar(index)} />
          ),
        )}
      </section>

      <div className="date">
        {getDayOfWeek(condition.date)}&nbsp;
        <span>{formatToMMDD(condition.date)}</span>
      </div>

      <button className="save-btn" onClick={onClickSave}>
        저장하기
      </button>
    </Container>
  );
};

export default EditStar;
