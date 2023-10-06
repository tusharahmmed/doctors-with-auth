import styled from "styled-components";
import {device} from "../../../../utils/screenSize";
import {Button} from "../../../shared/headerContainer/HeroSection/HeroSection";

const AppointmentForm = () => {
  return (
    <Form>
      <Wrpaer>
        <InputWraper>
          <input type="text" name="" id="" placeholder="Your Name" />
        </InputWraper>
        <InputWraper>
          <input type="text" name="" id="" placeholder="Your Email" />
        </InputWraper>
        <InputWraper>
          <input type="text" name="" id="" placeholder="Phone" />
        </InputWraper>
        <InputWraper>
          <input type="date" id="appoint-date" />
        </InputWraper>
        <SelectionWraper>
          <select name="department">
            <option className="option-item">Department</option>
            <option className="option-item" value="medicine">
              Medicine
            </option>
            <option className="option-item" value="gynaecology">
              Gynaecology
            </option>
            <option className="option-item" value="cardiology">
              Cardiology
            </option>
            <option className="option-item" value="neurology">
              Neurology
            </option>
            <option className="option-item" value="dental">
              Dental
            </option>
          </select>
        </SelectionWraper>
        <SelectionWraper>
          <select name="carlist">
            <option className="option-item">Doctor</option>
            <option className="option-item" value="jhon">
              Dr. Jhon Smith
            </option>
            <option className="option-item" value="jackson">
              Dr. Jackson
            </option>
            <option className="option-item" value="andrew">
              Dr. Andrew
            </option>
          </select>
        </SelectionWraper>
        <MessageWraper>
          <textarea name="" id="" placeholder="Message"></textarea>
        </MessageWraper>
      </Wrpaer>

      <SubmitButton>Submit</SubmitButton>
    </Form>
  );
};

export default AppointmentForm;

const Form = styled.form``;
const Wrpaer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media ${device.pad} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const InputWraper = styled.div`
  input {
    font-size: 16px;
    width: 100%;
    height: 54px;
    padding: 10px 20px;
    border: 1px solid var(--title-color);
    color: var(--title-color);

    &:focus {
      outline: 1px solid var(--subtitle-color);
    }
    &::placeholder {
      color: var(--title-color);
    }
  }
`;

const SelectionWraper = styled.div`
  select {
    font-size: 16px;
    width: 100%;
    height: 54px;
    padding: 10px 20px;
    outline: 1px solid var(--title-color);
    color: var(--title-color);
    border: none;
    border-right: 16px solid transparent;

    &:focus {
      outline: 2px solid var(--subtitle-color);
    }
    option {
      border: none;
      box-shadow: 1px 3px 7px red;
    }
  }
`;

const MessageWraper = styled.div`
  grid-column: 1 / span 3;

  @media ${device.pad} {
    grid-column: 1 / span 2;
  }
  @media ${device.mobile} {
    grid-column: 1 / span 1;
  }
  textarea {
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    width: 100%;
    height: 190px;
    padding: 10px 20px;
    resize: none;
    color: var(--title-color);
    border: 1px solid var(--title-color);

    &:focus {
      outline: 1px solid var(--subtitle-color);
    }
  }
`;
const SubmitButton = styled(Button)`
  margin-top: 1.5rem;
`;
