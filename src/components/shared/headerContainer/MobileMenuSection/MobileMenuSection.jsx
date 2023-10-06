/* eslint-disable react/prop-types */
import styled from "styled-components";
import {device} from "../../../../utils/screenSize";

const MobileMenuSection = ({isOpen, setIsOpen}) => {
  console.log(isOpen);
  return (
    <Container isOpen={isOpen}>
      <Links
        onClick={() => {
          setIsOpen(false);
        }}>
        <a href="#">Home</a>
        <a href="#service">Services</a>
        <a href="#departments">Departments</a>
        <a href="#doctor">Doctor</a>
        <a href="#blog">Blog</a>
        <a href="#testimonial">Testimonial</a>
        <a href="#appointment">Appointment</a>
      </Links>
    </Container>
  );
};

export default MobileMenuSection;

const Container = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 991;
  background: hsl(0 0% 48% / 0.3);
  backdrop-filter: blur(2rem);
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  transition: all 0.3s ease;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100%)"};

  @media ${device.pad} {
    width: 60%;
  }
  @media ${device.mobile} {
    width: 80%;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  a {
    color: white;
    display: block;
    font-size: 24px;
    margin: 5px 0px;
  }
`;
