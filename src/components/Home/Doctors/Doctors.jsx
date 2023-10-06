import styled from "styled-components";
import {device} from "../../../utils/screenSize";
import {DashLine, Subtitle, Title} from "../../../utils/styledItems";
import {ButtomMore} from "../Department/Department";

const Doctors = () => {
  return (
    <Container>
      <Wraper id="doctor" className="section-side-padding">
        <DoctorsSubtitle>
          <DashLine /> Our Doctors
        </DoctorsSubtitle>

        <TitleWraper>
          <DoctorsTitle>
            Our Professional <br />
            Expert Doctors
          </DoctorsTitle>
          <span>
            <SeeButton>See All</SeeButton>
          </span>
        </TitleWraper>

        <DoctorsWraper>
          <Doctor className="doctor-item">
            <img src="/img/doctor-1.png" alt="" />
            <Detailes className="doctor-details">
              <Name>Dr. Jackson</Name>
              <Sector>Cadiology Specielist</Sector>
            </Detailes>
          </Doctor>

          <Doctor className="doctor-item">
            <img src="/img/doctor-2.png" alt="" />
            <Detailes className="doctor-details">
              <Name>Dr. Jackson</Name>
              <Sector>Cadiology Specielist</Sector>
            </Detailes>
          </Doctor>

          <Doctor className="doctor-item">
            <img src="/img/doctor-3.png" alt="" />
            <Detailes className="doctor-details">
              <Name>Dr. Jackson</Name>
              <Sector>Cadiology Specielist</Sector>
            </Detailes>
          </Doctor>

          <Doctor className="doctor-item">
            <img src="/img/doctor-4.png" alt="" />
            <Detailes className="doctor-details">
              <Name>Dr. Jackson</Name>
              <Sector>Cadiology Specielist</Sector>
            </Detailes>
          </Doctor>
        </DoctorsWraper>
      </Wraper>
    </Container>
  );
};

export default Doctors;

const Container = styled.section`
  background: var(--section-background);
`;
const Wraper = styled.div`
  background: url("/img/line-2-left.png") left bottom no-repeat,
    url("/img/line-3-right.png") right top no-repeat;
  padding-top: 6rem;
  padding-bottom: 6rem;
  background-size: 30%;

  @media ${device.pad} {
    background-size: 50%;
    padding-top: 12rem;
  }
  @media ${device.mobile} {
    background-size: 80%;
    padding-top: 8rem;
  }
`;

const TitleWraper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: start;
  }
`;
const DoctorsSubtitle = styled(Subtitle)`
  color: #fff;

  @media ${device.pad} {
    padding-bottom: 0.5rem;
  }
`;
const DoctorsTitle = styled(Title)`
  color: #fff;

  @media ${device.pad} {
    font-size: 30px;
    line-height: 45px;
  }
  @media ${device.mobile} {
    font-size: 26px;
    line-height: 38px;
    padding-bottom: 0.5rem;
  }
`;
const SeeButton = styled(ButtomMore)`
  border: 1px solid #fff;
  color: #fff;

  @media ${device.mobile} {
    margin-top: 1rem;
  }
`;

const DoctorsWraper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 45px;
  padding-top: 3rem;

  @media ${device.pad} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Doctor = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  img {
    border-radius: 10px;
    width: 100%;
    display: flex;
  }
`;

const Detailes = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background: #ffab25;
  color: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 1rem 2rem 1rem;
`;
const Name = styled.h3``;
const Sector = styled.p``;
