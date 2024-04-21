import { Container } from "./styled";
import { Link } from "react-router-dom";
import Star from "../Star";
import { formatToMMDD, getDayOfWeek, isToday } from "../../utils/format";

const Rate = ({ list }) => {
  return (
    <Container>
      <ul>
        {list &&
          list.map((item, index) => (
            <li key={index} className={isToday(item.date) ? "active" : ""}>
              <p className="day-of-week">
                {getDayOfWeek(item.date)}&nbsp;
                <span>{formatToMMDD(item.date)}</span>
              </p>
              <Star rate={item.rate} />
              <div className="update-btn-wrapper">
                <Link to={`u?pid=${item.id}`}>수정</Link>
              </div>
            </li>
          ))}
      </ul>
    </Container>
  );
};

export default Rate;
