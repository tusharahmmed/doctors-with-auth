import {useState} from "react";
import styled from "styled-components";

import {Twirl as Hamburger} from "hamburger-react";
import MobileMenuSection from "../MobileMenuSection/MobileMenuSection";
import {device} from "../../../../utils/screenSize";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const MenuLinks = () => (
    <>
      <a href="#">Home</a>
      <a href="#service">Services</a>
      <a href="#departments">Departments</a>
      <a href="#doctor">Doctor</a>
      <a href="#blog">Blog</a>
      <a href="#testimonial">Testimonial</a>
      <a href="#appointment">Appointment</a>
    </>
  );

  return (
    <>
      <Container>
        <LeftSide>
          <a href="./">
            <img src="/img/logo.png" alt="" />
          </a>
        </LeftSide>

        <RightSide>
          <DesktopMenu>
            <MenuLinks />
          </DesktopMenu>

          <MobileMenu>
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </MobileMenu>
        </RightSide>

        <MobileMenuSection isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </>
  );
};

export default Header;

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--section-background);
  padding: 2rem 10%;

  @media ${device.laptop} {
    padding: 2rem 3%;
  }
  @media ${device.pad} {
    position: sticky;
    top: 0;
    height: 100px;
    z-index: 99;
  }
  @media ${device.mobile} {
    height: 80px;
  }
`;

const LeftSide = styled.div``;

const RightSide = styled.div`
  z-index: 999;
`;
const DesktopMenu = styled.nav`
  @media ${device.pad} {
    display: none;
  }

  a {
    color: #fff;
    text-decoration: none;
    margin: 0px 10px;
    font-size: 14px;
    font-weight: 500;
    padding: 5px 10px;

    @media ${device.laptop} {
      margin: 0 5px;
      padding: 5px 7px;
    }
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media ${device.pad} {
    display: block;
    color: #fff;
  }
`;
