import styled from "styled-components";
import {device} from "../../../../utils/screenSize";

const HeroSection = () => {
  return (
    <Container className="section-side-padding">
      <LeftSide>
        <Title>Take best quality Treatment For Us</Title>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry s standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </Description>
        <Button>Know More</Button>
      </LeftSide>

      <RightSide>
        <img src="/img/hero.png" alt="doctor" />
      </RightSide>
    </Container>
  );
};

export default HeroSection;

const Container = styled.section`
  display: flex;
  padding-top: 3rem;
  align-items: center;

  background-image: url("img/line.png");
  background-repeat: no-repeat;
  background-position: bottom left;
  padding-bottom: 14rem;

  @media ${device.laptop} {
  }
  @media ${device.pad} {
    flex-direction: column;
  }
  @media ${device.mobile} {
    padding-top: 1rem;
    padding-bottom: 8rem;
  }
`;

const LeftSide = styled.div`
  width: 60%;

  @media ${device.pad} {
    width: 100%;
    margin-bottom: 3rem;
  }
`;
const Title = styled.h1`
  font-size: 60px;
  color: #fff;
  font-weight: 700;
  line-height: 94px;
  width: 98%;

  @media ${device.laptop} {
    font-size: 50px;
    line-height: 80px;
  }
  @media ${device.mobile} {
    font-size: 30px;
    line-height: 45px;
  }
`;
const Description = styled.p`
  font-size: 16px;
  padding: 1rem 0rem 4rem;
  color: #fff;
  width: 90%;

  @media ${device.laptop} {
    padding: 1rem 0rem 2rem;
  }
`;

export const Button = styled.button`
  width: 130px;
  height: 48px;
  margin: auto;
  padding: 15px 30px;
  background: var(--button-background);
  outline: none;
  border: none;
  color: #fff;
  font-weight: 500;
  border-radius: 999px;
  cursor: pointer;
`;

const RightSide = styled.div`
  width: 40%;
  background: #ffab25;
  padding-right: 15px;
  padding-bottom: 10px;
  border-radius: 13px;

  @media ${device.pad} {
    width: 100%;
  }
  img {
    width: 100%;
  }
`;
