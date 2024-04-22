import { AlertWrapper, Container } from "./styled";

const Alert = ({ show, content }) => {
  return (
    <Container>
      <AlertWrapper className={show ? "show" : ""}>{content}</AlertWrapper>
    </Container>
  );
};

export default Alert;
