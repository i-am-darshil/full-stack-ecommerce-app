import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>UNLOCK THE SKILLS</Title>
      <FilterContainer>
        <Filter>
          <FilterText>FILTER SKILLS:</FilterText>
          <Select>
            <Option disabled selected>
              LEVEL
            </Option>
            <Option>BASICS</Option>
            <Option>INTERMEDIATE</Option>
            <Option>ADVANCED</Option>
          </Select>
          <Select>
            <Option disabled selected>
              LANGUAGE
            </Option>
            <Option>PYTHON</Option>
            <Option>JAVA</Option>
            <Option>JAVASCRIPT</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>SORT PRODUCTS:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;