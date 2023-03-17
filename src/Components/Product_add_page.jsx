import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ProductContext } from "../Context";
import { Navigate, useNavigate } from "react-router-dom";

function Product_add_page() {
  const navigate = useNavigate();

  const [showDVDInput, setShowDVDInput] = useState(false);
  const [showBookInput, setShowBookInput] = useState(false);
  const [showFurnitureInput, setShowFurnitureInput] = useState(false);
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [dvd, setDvd] = useState("");
  const [book, setBook] = useState("");

  // const [furniture, setFurniture] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const { products, setProducts } = useContext(ProductContext);

  const handleSave = (event) => {
    event.preventDefault();
    const product = {
      sku: sku,
      name: name,
      price: price,
      type: "",
      details: {},
    };
    if (showDVDInput) {
      product.type = "DVD";
      product.details = { dvd: dvd };
    } else if (showBookInput) {
      product.type = "Book";
      product.details = { book: book };
    } else if (showFurnitureInput) {
      product.type = "Furniture";
      product.details = { height: height, width: width, length: length };
    }

    setProducts([...products, product]);
    setSku("");
    setName("");
    setPrice("");
    setDvd("");
    setBook("");
    setHeight("");
    setWidth("");
    setLength("");
    // setFurniture("");

    navigate("/");
  };

  // console.log(products);
  return (
    <Content>
      <Container>
        <h1>Products Add</h1>
        <div>
          <BtnSave onClick={handleSave}>Save</BtnSave>
          <BtnCancel
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </BtnCancel>
        </div>
      </Container>
      <FormContainer>
        <IDDiv>
          <label>SKU</label>
          <input
            type="text"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
          />
        </IDDiv>
        <NameDiv>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </NameDiv>
        <PriceDiv>
          <label>Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </PriceDiv>
        <TypeDiv>
          <label>Product Type</label>
          <select
            onChange={(e) => {
              setShowDVDInput(e.target.value === "DVD");
              setShowBookInput(e.target.value === "Book");
              setShowFurnitureInput(e.target.value === "Furniture");
            }}
          >
            <option defaultValue="Type Switcher">Type Switcher</option>
            <option>DVD</option>
            <option>Book</option>
            <option>Furniture</option>
          </select>
        </TypeDiv>
        {showDVDInput && (
          <div>
            <h3>Size (mb)</h3>
            <DVD>
              <label>DVD Input</label>
              <input
                type="text"
                value={dvd}
                onChange={(e) => setDvd(e.target.value)}
              />
            </DVD>
          </div>
        )}
        {showBookInput && (
          <div>
            <h3>Weight (kg)</h3>
            <Book>
              <label>Book Input</label>
              <input
                type="text"
                value={book}
                onChange={(e) => setBook(e.target.value)}
              />
            </Book>
          </div>
        )}
        {showFurnitureInput && (
          <div>
            <h3>Provide Dimensions</h3>
            <Furn>
              <Dimensions>
                <label>Height </label>
                <input
                  type="text"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </Dimensions>
              <Dimensions>
                <label>Width</label>
                <input
                  type="text"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                />
              </Dimensions>
              <Dimensions>
                <label>Length</label>
                <input
                  type="text"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                />
              </Dimensions>
            </Furn>
          </div>
        )}
      </FormContainer>
    </Content>
  );
}

export default Product_add_page;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const Dimensions = styled.div`
  display: flex;
  justify-content: space-between;
`;
const IDDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DVD = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Book = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Furn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: space-between;
  width: 15rem;
`;
const NameDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PriceDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FormContainer = styled.div`
  /* border: 1px solid red; */
  padding: 3rem;
  width: 25rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (width>500px) {
    width: 25rem;
  }
  @media (width<500px) {
    width: 18rem;
  }
`;
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
const TypeDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
