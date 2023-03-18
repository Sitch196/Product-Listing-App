import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context";
import { useContext } from "react";

function Product_list_page() {
  const { products, setProducts } = useContext(ProductContext);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleProductSelection = (event, product) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedProducts([...selectedProducts, product]);
    } else {
      setSelectedProducts(
        selectedProducts.filter(
          (selectedProduct) => selectedProduct.sku !== product.sku
        )
      );
    }
  };

  const removeSelectedProducts = () => {
    const updatedProducts = products.filter(
      (product) =>
        !selectedProducts.some(
          (selectedProduct) => selectedProduct.sku === product.sku
        )
    );
    setProducts(updatedProducts);
    setSelectedProducts([]);
  };
  console.log(products);
  return (
    <Container>
      <Header>
        <h1>Products List</h1>
        <Buttons_Container>
          <AddLink to="product_add_page">ADD</AddLink>
          <DeleteBtn onClick={removeSelectedProducts}>MASS DELETE</DeleteBtn>
        </Buttons_Container>
      </Header>
      <ProductWrapper>
        {products.map((product, index) => (
          <Product key={index}>
            <Checkbox
              type="checkbox"
              checked={selectedProducts.some(
                (selectedProduct) => selectedProduct.sku === product.sku
              )}
              onChange={(event) => handleProductSelection(event, product)}
            />
            <div>SKU: {product.sku}</div>
            <div>Name: {product.name}</div>
            <div>Price: ${Number(product.price).toFixed(2)}</div>
            <div>
              {product.type === "DVD" && (
                <div>Size: {product.details.dvd} mb</div>
              )}

              {product.type === "Book" && (
                <div>Weight: {product.details.book} kg</div>
              )}
              {product.type === "Furniture" && (
                <>
                  <div>
                    Dimensions: {product.details.height}X{product.details.width}
                    X{product.details.length} cm
                  </div>
                </>
              )}
            </div>
          </Product>
        ))}
      </ProductWrapper>
    </Container>
  );
}

export default Product_list_page;
const AddLink = styled(Link)`
  text-decoration: none;
  border: 1px solid lightgrey;
  background-color: whitesmoke;
  padding: 0.3rem 0.5rem;
  margin: 0 1rem;
  border-radius: 5px;
  &:visited {
    color: black;
  }
`;
const DeleteBtn = styled.button`
  background-color: whitesmoke;
  padding: 0.5rem 0.5rem;
  border-radius: 5px;
  border: 1px solid lightgrey;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: rgba(255, 0, 0, 0.8);
    color: whitesmoke;
    font-weight: bold;
  }
`;
const Checkbox = styled.input`
  position: relative;
  right: 5rem;
  top: -0.5rem;
`;
const ProductWrapper = styled.div`
  padding: 1rem 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
const Product = styled.div`
  border: 1px solid lightgrey;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  width: 15rem;
  text-align: center;
  padding: 2rem 0;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  border-bottom: 1px solid lightgrey;
  /* background-color: lightgray; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.6rem;
`;
// const Logo = styled.h1``;
const Buttons_Container = styled.div``;
