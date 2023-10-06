/* eslint-disable react/prop-types */

import styled from "styled-components";

const BlogItem = (props) => {
  const {title, author, img} = props.data;
  return (
    <Container>
      <Title>{title}</Title>
      <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Description>
      <More>Read More...</More>
      <Details>
        <img src={img} alt="" />
        <Author>
          <Name>{author}</Name>
          <Date>Auguest 20,2020</Date>
        </Author>
      </Details>
    </Container>
  );
};

export default BlogItem;

const Container = styled.article``;
const Title = styled.h3`
  font-size: 18px;
  color: var(--title-color);
`;
const Description = styled.p`
  font-size: 16px;
  line-height: 28px;
  color: var(--description-color);
  padding: 0.5rem 0rem;
`;
const More = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: var(--button-background);
  padding: 0.5rem 0rem 1rem;
  cursor: pointer;
`;
const Details = styled.div`
  display: flex;
  align-items: center;
`;
const Author = styled.div`
  margin-left: 1.6rem;
`;
const Name = styled.h4`
  color: var(--title-color);
  font-weight: 600;
`;
const Date = styled.p`
  color: var(--description-color);
`;
