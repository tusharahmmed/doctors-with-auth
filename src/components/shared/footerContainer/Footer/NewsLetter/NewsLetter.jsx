import styled from "styled-components";

import {Button} from "../../../headerContainer/HeroSection/HeroSection";
import {device} from "../../../../../utils/screenSize";

const NewsLetter = () => {
  return (
    <Container>
      <Title>Join Our News Letter</Title>
      <Description>
        Lorm Ipsum doller site amnet, consectureadipicingelit
      </Description>
      <Form>
        <InputWraper>
          <input type="text" />
          <SubcribeBtn>Subscribe</SubcribeBtn>
        </InputWraper>
      </Form>
    </Container>
  );
};

export default NewsLetter;

const Container = styled.div`
  color: #fff;
  padding: 1rem 0rem;
  text-align: center;
`;
const Title = styled.h3`
  font-size: 25px;
`;
const Description = styled.p`
  font-size: 16px;
`;
const Form = styled.form`
  padding-top: 2rem;
`;
const InputWraper = styled.div`
  width: 35%;
  margin: auto;
  position: relative;

  @media ${device.laptop} {
    width: 41%;
  }
  @media ${device.pad} {
    width: 53%;
  }
  @media ${device.mobile} {
    width: 100%;
  }

  input {
    height: 60px;
    width: 100%;
    border-radius: 999px;
    border: none;
    padding: 5px 150px 5px 30px;
    font-size: 16px;
    outline: none;
    font-weight: 500;

    @media ${device.pad} {
      padding: 5px 140px 5px 30px;
    }
  }
`;
const SubcribeBtn = styled(Button)`
  position: absolute;
  right: 0px;
  top: 0px;
  bottom: 0px;
  font-weight: 500;
`;
