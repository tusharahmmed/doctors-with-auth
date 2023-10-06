import {DashLine, Subtitle, Title} from "../../../utils/styledItems";
import styled from "styled-components";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import {device} from "../../../utils/screenSize";

const Testimonial = () => {
  const data = [
    {
      img: "/img/testimonial.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
      name: "John Smith",
      post: "CEO & Director",
    },
    {
      img: "/img/testimonial.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
      name: "John Smith",
      post: "CEO & Director",
    },
    {
      img: "/img/testimonial.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
      name: "John Smith",
      post: "CEO & Director",
    },
  ];

  return (
    <Container id="testimonial" className="section-side-padding">
      <Subtitle>
        <DashLine /> Our Testimonial
      </Subtitle>
      <Title>
        Our Satisfication <br />
        Client feedback
      </Title>

      <SliderContainer>
        <Swiper
          autoplay={true}
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}>
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Slide>
                <Thumb>
                  <img src={item.img} alt="" />
                </Thumb>
                <Details>
                  <Quote>❝</Quote>
                  <Description>{item.description}</Description>
                  <Author>
                    <Name>{item.name}</Name>
                    <Post>{item.post}</Post>
                  </Author>
                </Details>
              </Slide>
            </SwiperSlide>
          ))}
        </Swiper>
        <ContainerShadow />
      </SliderContainer>
    </Container>
  );
};

export default Testimonial;

const Container = styled.section`
  margin-top: -3rem;
  padding-top: 6rem;
  padding-bottom: 6rem;

  @media ${device.pad} {
    padding-top: 12rem;
    margin-top: -9rem;
  }
  @media ${device.mobile} {
    padding-top: 8rem;
    margin-top: -6rem;
  }
`;

const SliderContainer = styled.div`
  margin-top: 0rem;
`;

const Slide = styled.div`
  background: var(--section-background);
  margin-top: 150px;
  clip-path: polygon(5% 0%, 50% -50%, 100% 0%, 95% 100%, 0% 100%);

  @media ${device.mobile} {
    clip-path: polygon(0% 0%, 50% -50%, 100% 0%, 100% 100%, 0% 100%);
  }
`;
const Thumb = styled.div`
  text-align: center;
  img {
    margin: -100px auto 0px;
  }
`;

const Details = styled.div`
  width: 60%;
  color: #fff;
  margin: auto;
  text-align: center;

  @media ${device.mobile} {
    width: 90%;
  }
`;
const Quote = styled.div`
  font-size: 36px;
  margin-bottom: -10px;
  padding: 10px 0px;
`;
const Description = styled.p`
  font-size: 16px;
  line-height: 28px;
`;
const Author = styled.div`
  padding: 2rem 0rem;
`;
const Name = styled.h4`
  font-size: 16px;
  font-weight: 600;
`;
const Post = styled.p`
  font-size: 16px;
  line-height: 28px;
`;

const ContainerShadow = styled.div`
  width: 91%;
  height: 20px;
  clip-path: polygon(1% 0%, 100% 0%, 99% 100%, 50% 100%, 0% 100%);
  background: #d6d5e5;
  margin-left: 2%;
`;
