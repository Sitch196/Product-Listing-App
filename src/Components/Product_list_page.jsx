import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context";
import { useContext } from "react";
function Product_list_page() {
  const { products } = useContext(ProductContext);
  return (
    <Container>
      <Header>
        <h1>Products List</h1>
        <Buttons_Container>
          <Link to="product_add_page">ADD</Link>
          <button>MASS DELETE</button>
        </Buttons_Container>
      </Header>
      <ProductWrapper>
        {products.map((product) => (
          <Product key={product.sku}>
            <div>SKU: {product.sku}</div>
            <div>Name: {product.name}</div>
            <div>Price: {product.price}</div>
          </Product>
        ))}
      </ProductWrapper>
    </Container>
  );
}

export default Product_list_page;
const ProductWrapper = styled.div`
  padding: 1rem 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
const Product = styled.div`
  border: 1px solid red;
  width: 15rem;
  text-align: center;
  padding: 2rem 0;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  /* border: 1px solid red; */
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.6rem;
`;
// const Logo = styled.h1``;
const Buttons_Container = styled.div``;
