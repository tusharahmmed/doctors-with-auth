import styled from "styled-components";
import {device} from "../../../utils/screenSize";
import {DashLine, Subtitle, Title} from "../../../utils/styledItems";
import BlogItem from "./BlogItem/BlogItem";

const Blog = () => {
  const blogs = [
    {
      img: "/img/blog-1.png",
      title: "Working In Emergency Medicine",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: "WiliamSon Bridon",
    },
    {
      img: "/img/blog-2.png",
      title: "Individual Treatment & Assistance",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: "John Smith",
    },
    {
      img: "/img/blog-3.png",
      title: "Child's First Hospital Visit",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: "WiliamSon Bridon",
    },
  ];

  return (
    <Container id="blog" className="section-side-padding">
      <Subtitle>
        <DashLine /> Our Blog
      </Subtitle>
      <Title>
        Latest News Or <br />
        Blog Know More Us
      </Title>

      <BlogWraper>
        {blogs.map((item, index) => (
          <BlogItem key={index} data={item} />
        ))}
      </BlogWraper>
    </Container>
  );
};

export default Blog;

const Container = styled.section`
  padding-top: 6rem;
  padding-bottom: 6rem;

  @media ${device.pad} {
    padding-top: 12rem;
    margin-top: -6rem;
  }
  @media ${device.mobile} {
    padding-top: 8rem;
    margin-top: -4rem;
  }
`;

const BlogWraper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 4rem 0rem 0rem;

  @media ${device.pad} {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 40px;
  }
  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
    padding: 2rem 0rem 0rem;
  }
`;
