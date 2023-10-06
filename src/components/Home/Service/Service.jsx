import styled from "styled-components";
import {DashLine, Subtitle, Title} from "../../../utils/styledItems";
import {HiArrowNarrowRight} from "react-icons/hi";
import {device} from "../../../utils/screenSize";

const Service = () => {
  return (
    <Container id="service" className="section-side-padding">
      <Subtitle>
        {" "}
        <DashLine /> Our Service
      </Subtitle>
      <TitleWraper>
        <ServiceTitle>
          The Further Quality <br />
          Our Health
        </ServiceTitle>
        <Description>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
        </Description>
      </TitleWraper>

      <Items>
        <Item className="service-item">
          <Icon className="service-icon">
            <img src="/img/icon-doctor.png" alt="" />
          </Icon>
          <ItemContent>
            <ItemTitle className="__service-title">Online Emergency</ItemTitle>
            <ItemDescription className="__service-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </ItemDescription>
            <GoLink className="__service-item-link">
              Get A Doctor <HiArrowNarrowRight />{" "}
            </GoLink>
          </ItemContent>
        </Item>

        <Item className="service-item">
          <Icon className="service-icon">
            <img src="/img/icon-female.png" alt="" />
          </Icon>
          <ItemContent>
            <ItemTitle className="__service-title">24 Hour Support</ItemTitle>
            <ItemDescription className="__service-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </ItemDescription>
            <GoLink className="__service-item-link">
              Get A Doctor <HiArrowNarrowRight />{" "}
            </GoLink>
          </ItemContent>
        </Item>
        <Item className="service-item">
          <Icon className="service-icon">
            <img src="/img/icon-doctor-2.png" alt="" />
          </Icon>
          <ItemContent>
            <ItemTitle className="__service-title">Qualified Doctors</ItemTitle>
            <ItemDescription className="__service-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </ItemDescription>
            <GoLink className="__service-item-link">
              Get A Doctor <HiArrowNarrowRight />{" "}
            </GoLink>
          </ItemContent>
        </Item>

        <Item className="service-item">
          <Icon className="service-icon">
            <img src="/img/icon-doctor-2.png" alt="" />
          </Icon>
          <ItemContent>
            <ItemTitle className="__service-title">
              Health Consultation
            </ItemTitle>
            <ItemDescription className="__service-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </ItemDescription>
            <GoLink className="__service-item-link">
              Get A Doctor <HiArrowNarrowRight />{" "}
            </GoLink>
          </ItemContent>
        </Item>
      </Items>
    </Container>
  );
};

export default Service;

const Container = styled.section`
  margin-top: 2rem;
  padding-top: 6rem;
  padding-bottom: 1rem;

  @media ${device.pad} {
    margin-top: -4.25rem;
    padding-top: 12rem;
  }
  @media ${device.mobile} {
    margin-top: -4.25rem;
    padding-top: 8rem;
  }
`;

const TitleWraper = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

const ServiceTitle = styled(Title)`
  width: 50%;

  @media ${device.pad} {
    width: 55%;
    font-size: 30px;
    line-height: 45px;
  }
  @media ${device.mobile} {
    width: 100%;
    font-size: 26px;
    line-height: 38px;
    padding-bottom: 0.5rem;
  }
`;
const Description = styled.p`
  width: 50%;
  color: var(--description-color);

  @media ${device.laptop} {
    width: 45%;
  }
  @media ${device.mobile} {
    width: 100%;
  }
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 2rem;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 3rem 2rem;
  border-radius: 10px;
  transition: all 0.3s;

  @media ${device.mobile} {
    padding: 2rem 1rem;
  }
`;
const Icon = styled.div`
  box-sizing: border-box;
  img {
    background: #fb5f5f;
    padding: 10px 12px;
    border-radius: 999px;
  }
`;
const ItemContent = styled.div`
  margin-left: 20px;
`;
const ItemTitle = styled.h4`
  font-size: 20px;
  color: var(--title-color);
  font-weight: 600;
`;
const ItemDescription = styled.p`
  color: var(--description-color);
  font-size: 16px;
  padding: 0.3rem 0rem;
`;
const GoLink = styled.p`
  color: var(--button-background);
  display: flex;
  align-items: center;

  svg {
    margin-left: 20px;
  }
`;
