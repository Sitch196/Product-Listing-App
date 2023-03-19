import React, { useState } from "react";
import {
  AddLink,
  DeleteBtn,
  Checkbox,
  ProductWrapper,
  Product,
  Container,
  Header,
  Buttons_Container,
  Logo,
} from "../style/productlist";
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

  return (
    <Container>
      <Header>
        <Logo>Products List</Logo>
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
