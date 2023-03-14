import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Product_list_page() {
  return (
    <Container>
      <Logo>Products List</Logo>
      <Buttons_Container>
        <Link to="product_add_page">ADD</Link>
        <button>MASS DELETE</button>
      </Buttons_Container>
    </Container>
  );
}

export default Product_list_page;

const Container = styled.div`
  /* border: 1px solid red; */
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.6rem;
`;
const Logo = styled.h1``;
const Buttons_Container = styled.div``;
