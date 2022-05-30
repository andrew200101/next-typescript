import styled from "styled-components";
import Layout from "../layout/Layout"

const Title = styled.h1`
  color: red;
`;

const Home = () => {
  return (
    <Layout>
      <p>hello</p>
      <Title>Title</Title>
    </Layout>
  );
};

export default Home;