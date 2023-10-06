import styled from "styled-components";
import {device} from "./screenSize";

const DashLine = styled.span`
  display: inline-block;
  width: 65px;
  height: 1px;
  border-bottom: 1px dashed;
  margin-right: 20px;
`;
const Subtitle = styled.h3`
  display: flex;
  align-items: center;
  color: var(--subtitle-color);
  font-weight: 500;
  font-size: 16px;
  padding-bottom: 1rem;

  @media ${device.pad} {
    padding-bottom: 0.5rem;
  }
`;
const Title = styled.h2`
  font-size: 45px;
  color: var(--title-color);
  font-weight: 700;
  line-height: 57px;

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

export {Subtitle, DashLine, Title};
