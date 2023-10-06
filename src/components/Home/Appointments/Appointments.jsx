import styled from "styled-components";
import {device} from "../../../utils/screenSize";
import {DashLine, Subtitle, Title} from "../../../utils/styledItems";
import AppointmentForm from "./AppointmentForm/AppointmentForm";

const Appointments = () => {
  return (
    <Container id="appointment" className="section-side-padding">
      <Subtitle>
        <DashLine />
        Appointment
      </Subtitle>
      <Title>
        Make an <br />
        appointment{" "}
      </Title>

      <FormWraper>
        <AppointmentForm />
      </FormWraper>
    </Container>
  );
};

export default Appointments;

const Container = styled.section`
  padding-top: 6rem;
  padding-bottom: 1rem;

  @media ${device.pad} {
    padding-top: 12rem;
    margin-top: -6rem;
  }
  @media ${device.mobile} {
    padding-top: 8rem;
    margin-top: -4rem;
  }
`;
const FormWraper = styled.div`
  padding: 2.5rem 0rem;
`;
