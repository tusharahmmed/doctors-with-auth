import styled from "styled-components";

import Header from "./Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import {device} from "../../../utils/screenSize";
import {useLocation} from "react-router-dom";

const HeaderContainer = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Container>
        <Wraper>{location.pathname === "/" && <HeroSection />}</Wraper>
      </Container>
    </>
  );
};

export default HeaderContainer;

const Container = styled.header`
  background: #d6d5e5;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 90%, 0% 100%);

  @media ${device.pad} {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 95%, 0% 100%);
  }
  @media ${device.mobile} {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 97%, 0% 100%);
  }
`;
const Wraper = styled.div`
  background: var(--section-background);
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 88%, 0% 100%);

  @media ${device.pad} {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 93%, 0% 100%);
  }
  @media ${device.mobile} {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 95%, 0% 100%);
  }
`;
