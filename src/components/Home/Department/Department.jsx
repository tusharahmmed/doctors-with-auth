import {Tab, TabList, Tabs, TabPanel} from "react-tabs";
import styled from "styled-components";

import {DashLine, Subtitle, Title} from "../../../utils/styledItems";
import SingleDepartment from "./SingleDepartment/SingleDepartment";
import {device} from "../../../utils/screenSize";

const Department = () => {
  const catagories = [
    "Crutches",
    "X-ray",
    "Cardiology",
    "Dental",
    "Nerulogy",
    "Pulmonary",
  ];

  return (
    <Container id="departments" className="section-side-padding">
      <Subtitle>
        {" "}
        <DashLine /> Our Department
      </Subtitle>
      <Title>
        Our Best <br /> Department Store
      </Title>

      <TabSection>
        <Tabs focusTabOnClick={false}>
          <TabList>
            {catagories.map((item, index) => (
              <Tab key={index}>{item}</Tab>
            ))}
            <ButtonWraper>
              <ButtomMore>See All</ButtomMore>
            </ButtonWraper>
          </TabList>

          {catagories.map((item, index) => (
            <TabPanel key={index}>
              <SingleDepartment name={item} />
            </TabPanel>
          ))}
        </Tabs>
      </TabSection>
    </Container>
  );
};

export default Department;

const Container = styled.div`
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

const TabSection = styled.div`
  padding: 3.5rem 0rem 1rem;
  @media ${device.mobile} {
    padding: 2rem 0rem 1rem;
  }
`;

const ButtonWraper = styled.span`
  @media (max-width: 600px) {
    width: 120%;
  }
`;

export const ButtomMore = styled.button`
  background: transparent;
  font-weight: 600;
  color: #000000;
  border: 1px solid black;
  outline: none;
  padding: 15px 40px;
  border-radius: 999px;
  cursor: pointer;
`;
