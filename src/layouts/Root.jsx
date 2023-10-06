import {Outlet} from "react-router-dom";
import FooterContainer from "../components/shared/footerContainer/FooterContainer";
import HeaderContainer from "../components/shared/headerContainer/HeaderContainer";
import ScrollUp from "../components/shared/scrollUp/ScrollUp";

const Root = () => {
  return (
    <>
      <HeaderContainer />
      <main id="main">
        <Outlet />
      </main>
      <FooterContainer />
      <ScrollUp />
    </>
  );
};

export default Root;
