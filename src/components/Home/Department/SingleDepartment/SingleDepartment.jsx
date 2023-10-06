/* eslint-disable react/prop-types */

import styled from "styled-components";

import {Button} from "../../../shared/headerContainer/HeroSection/HeroSection";
import {device} from "../../../../utils/screenSize";

const SingleDepartment = ({name}) => {
  return (
    <Container className="animate__animated animate__fadeIn">
      <ItemThumb>
        <img src="/img/service.png" alt="" />
      </ItemThumb>

      <ItemInfo className="animate__animated animate__fadeIn">
        <Title>Welcome To Our {name} Depatment </Title>
        <Description>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need
          to be sure there is not anything embarrassing hidden in the
        </Description>
        <ReadMore className="animate__animated animate__fadeIn ">
          Read More
        </ReadMore>
      </ItemInfo>
    </Container>
  );
};

export default SingleDepartment;

const Container = styled.div`
  padding: 1.5rem 0rem;
  display: flex;
  align-items: center;
  animation-duration: 1.5s;

  @media ${device.pad} {
    flex-direction: column;
  }
`;

const ItemThumb = styled.div`
  width: 40%;
  @media ${device.pad} {
    width: 90%;
  }
  @media ${device.mobile} {
    width: 95%;
  }
  img {
    width: 100%;
  }
`;

const ItemInfo = styled.div`
  width: 50%;
  margin-left: 4rem;
  animation-duration: 2s;
  @media ${device.pad} {
    width: 90%;
    padding-top: 2rem;
    margin-left: 0rem;
  }
  @media ${device.mobile} {
    width: 95%;
    padding-top: 2rem;
    margin-left: 0rem;
  }
`;
const Title = styled.h3`
  font-size: 30px;
  line-height: 57px;
  color: var(--title-color);
  font-weight: 500;

  @media ${device.pad} {
    line-height: 40px;
  }
  @media ${device.mobile} {
    font-size: 22px;
    line-height: 35px;
  }
`;
const Description = styled.p`
  font-size: 16px;
  line-height: 28px;
  color: var(--description-color);
  padding: 0.5rem 0rem 2rem;
`;

const ReadMore = styled(Button)`
  animation-duration: 2.2s;
`;
