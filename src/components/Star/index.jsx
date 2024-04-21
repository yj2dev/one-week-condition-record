import { Container, FaRegStarIcon, FaStarIcon } from "./styled";

const Star = ({ rate }) => {
  return (
    <Container>
      {[...new Array(5)].map((item, index) =>
        rate > index ? (
          <FaStarIcon key={index} />
        ) : (
          <FaRegStarIcon key={index} />
        ),
      )}
    </Container>
  );
};

export default Star;
