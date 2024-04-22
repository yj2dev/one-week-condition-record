import { Container } from "./styled";
import Alert from "../components/Alert";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const alertState = useSelector((state) => state.alertSlice);

  return (
    <>
      <Alert show={alertState?.show} content={alertState?.content} />

      <Container>{children}</Container>
    </>
  );
};

export default Layout;
