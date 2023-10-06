import styled from "styled-components";

import Footer from "./Footer/Footer";
import {device} from "../../../utils/screenSize";
import {useLocation} from "react-router-dom";

const FooterContainer = () => {
  const location = useLocation();

  return (
    <Container location={location.pathname}>
      <Wraper location={location.pathname} className="section-side-padding">
        <Footer />
      </Wraper>

      <FooterBottom>
        <CopyWright>
          <span>©</span> Copy right 2022 all right reserved
        </CopyWright>
      </FooterBottom>
    </Container>
  );
};

export default FooterContainer;

const Container = styled.section`
  background: #d6d5e5;
  clip-path: ${(props) =>
    props.location === "/"
      ? "polygon(0% 0%, 50% 11%, 100% 0%, 100% 100%, 0% 100%)"
      : "0px"};

  @media ${device.pad} {
    clip-path: ${(props) =>
      props.location === "/"
        ? "polygon(0% 0%, 50% 11%, 100% 0%, 100% 100%, 0% 100%)"
        : "0px"};
  }
  @media ${device.mobile} {
    clip-path: ${(props) =>
      props.location === "/"
        ? "polygon(0% 0%, 50% 3%, 100% 0%, 100% 100%, 0% 100%)"
        : "0px"};
  }
`;
const Wraper = styled.div`
  background: var(--section-background);
  padding-top: 8rem;
  padding-bottom: 2rem;

  clip-path: ${(props) =>
    props.location === "/"
      ? "polygon(0% 0%, 50% 15%, 100% 0%, 100% 100%, 0% 100%)"
      : "0px"};

  background-image: url("/img/footer.png");
  background-repeat: no-repeat;
  background-position: right 3% bottom;
  background-size: 250px;

  @media ${device.laptop} {
    background-size: 180px;
  }
  @media ${device.pad} {
    clip-path: ${(props) =>
      props.location === "/"
        ? "polygon(0% 0%, 50% 15%, 100% 0%, 100% 100%, 0% 100%)"
        : "0px"};
  }
  @media ${device.mobile} {
    clip-path: ${(props) =>
      props.location === "/"
        ? "polygon(0% 0%, 50% 5%, 100% 0%, 100% 100%, 0% 100%)"
        : "0px"};

    padding-top: 4rem;
  }
`;

const FooterBottom = styled.div`
  padding: 1rem 0rem;
  border-top: 1px solid #527abe;
  background: var(--section-background);
  position: relative;
`;

const CopyWright = styled.p`
  color: #fff;
  text-align: center;

  span {
    margin-right: 5px;
  }
`;
