import React from "react";
import styled from "styled-components";
function Product_add_page() {
  return (
    <Container>
      <Logo>Products Add</Logo>
      <Buttons_Container>
        <BtnSave>Save</BtnSave>
        <BtnCancel>Cancel</BtnCancel>
      </Buttons_Container>
    </Container>
  );
}

export default Product_add_page;
const BtnSave = styled.button`
  text-transform: uppercase;
  padding: 0.5rem 0.5rem;
`;
const BtnCancel = styled.button`
  text-transform: uppercase;
  padding: 0.5rem 0.5rem;
`;
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
