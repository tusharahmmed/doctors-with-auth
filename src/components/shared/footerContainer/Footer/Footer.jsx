import styled from "styled-components";
import NewsLetter from "./NewsLetter/NewsLetter";
import {FaFacebookF, FaTwitter, FaLinkedin} from "react-icons/fa";
import {device} from "../../../../utils/screenSize";

const Footer = () => {
  return (
    <Container>
      <NewsLetter />

      <WidgetWraper>
        <Widget>
          <Logo>
            <img src="/img/footer-logo.png" alt="" />
            <h4>Medical</h4>
          </Logo>
          <DescriptionWraper>
            <Description>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </Description>
          </DescriptionWraper>
          <SocialLinks>
            <a href="#">
              <SocialItem>
                <FaFacebookF />
              </SocialItem>
            </a>
            <a href="#">
              <SocialItem>
                <FaTwitter />
              </SocialItem>
            </a>
            <a href="#">
              <SocialItem>
                <FaLinkedin />
              </SocialItem>
            </a>
          </SocialLinks>
        </Widget>

        <Widget className="footer-widget-2">
          <span>
            <WidgetTitle>Services</WidgetTitle>

            <DescriptionWraper>
              <a href="#">
                <Description>Customer Support</Description>
              </a>
              <a href="#">
                <Description>Retceive Quote</Description>
              </a>
              <a href="#">
                <Description>Uncalimed Amount</Description>
              </a>
            </DescriptionWraper>
          </span>
        </Widget>

        <Widget>
          <WidgetTitle>Contact</WidgetTitle>

          <DescriptionWraper>
            <a href="#">
              <div>
                <span>
                  <img src="/img/icon-phone.png" alt="" />
                </span>
                <Description>+0123456789</Description>
              </div>
            </a>

            <a href="#">
              <div>
                <span>
                  <img src="/img/icon-mail.png" alt="" />
                </span>
                <Description>info@gmail.com</Description>
              </div>
            </a>

            <a href="#">
              <div>
                <span>
                  <img src="/img/icon-map.png" alt="" />
                </span>
                <Description>London,England</Description>
              </div>
            </a>
          </DescriptionWraper>
        </Widget>
      </WidgetWraper>
    </Container>
  );
};

export default Footer;

const Container = styled.div``;

const WidgetWraper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media ${device.laptop} {
    gap: 10px;
  }
  @media ${device.pad} {
    grid-template-columns: 1.2fr 1fr 1fr;
  }
  @media ${device.mobile} {
    grid-template-columns: 1fr;
    padding-bottom: 0rem;
  }
`;

const Widget = styled.div`
  color: #fff;
  @media ${device.mobile} {
    padding: 1rem 0rem;
  }
`;
const WidgetTitle = styled.h4`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  img {
    width: 50px;
  }
  h4 {
    font-size: 22px;
    font-weight: 600;
    margin-left: 20px;
  }
`;
const DescriptionWraper = styled.div`
  a {
    color: #fff;

    div {
      display: flex;
      align-items: center;

      span {
        margin-right: 10px;
      }
    }
  }
`;
const Description = styled.p`
  line-height: 28px;
`;
const SocialLinks = styled.div`
  display: flex;
  padding-top: 1.5rem;
  a {
    color: var(--section-background);
    font-size: 16px;
  }
`;
const SocialItem = styled.div`
  background: #fff;
  padding: 10px;
  margin-right: 20px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
