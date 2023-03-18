import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ProductContext } from "../Context";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";

function Product_add_page() {
  const navigate = useNavigate();

  const [showDVDInput, setShowDVDInput] = useState(false);
  const [showBookInput, setShowBookInput] = useState(false);
  const [showFurnitureInput, setShowFurnitureInput] = useState(false);
  //////////////////////////////////////////////////////////
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [dvd, setDvd] = useState("");
  const [book, setBook] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const { products, setProducts } = useContext(ProductContext);
  ///////////////////////////////////////////////////////////////

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSave = () => {
    // event.preventDefault();
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
          <BtnSave onClick={handleSubmit(handleSave)}>Save</BtnSave>
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
        <InputDivs>
          <label>SKU</label>
          <Input
            type="text"
            placeholder="Sku"
            {...register("sku", {
              required: "SKU is required",
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: "Sku must  contain only numbers and letters",
              },
            })}
            value={sku}
            onChange={(e) => setSku(e.target.value)}
          />
        </InputDivs>
        {errors.sku && (
          <p style={{ color: "red", fontSize: "0.8", textAlign: "right" }}>
            {errors.sku.message}{" "}
          </p>
        )}
        <InputDivs>
          <label>Name</label>
          <Input
            type="text"
            placeholder="Name"
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: "Name must  contain only numbers and letters",
              },
            })}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputDivs>
        {errors.name && (
          <p style={{ color: "red", fontSize: "0.8", textAlign: "right" }}>
            {errors.name.message}{" "}
          </p>
        )}
        <InputDivs>
          <label>Price</label>
          <Input
            type="number"
            placeholder="Price"
            {...register("price", {
              required: "Price Is Required",
              min: 0,
              pattern: {
                value: /^\d+$/,
                message: "Price must contain only numbers",
              },
            })}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min={0}
          />
        </InputDivs>
        {errors.price && (
          <p style={{ color: "red", fontSize: "0.8", textAlign: "right" }}>
            {errors.price.message}{" "}
          </p>
        )}
        <InputDivs>
          <label>Product Type</label>
          <Select
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
          </Select>
        </InputDivs>
        {showDVDInput && (
          <div>
            <h3>Provide Size</h3>
            <InputDivs>
              <label>Size (mb)</label>
              <Input
                type="text"
                value={dvd}
                placeholder="DVD"
                {...register("dvd", {
                  required: "Size is required",
                  pattern: {
                    value: /^\d+$/,
                    message: "Must contain only numbers",
                  },
                })}
                onChange={(e) => setDvd(e.target.value)}
              />
            </InputDivs>
            {errors.dvd && (
              <p style={{ color: "red", fontSize: "0.8", textAlign: "right" }}>
                {errors.dvd.message}{" "}
              </p>
            )}
          </div>
        )}
        {showBookInput && (
          <div>
            <h3>Provide Weight</h3>
            <InputDivs>
              <label>Weight (kg)</label>
              <Input
                type="text"
                placeholder="Book"
                {...register("book", {
                  required: "Weight is required",
                  pattern: {
                    value: /^\d+$/,
                    message: "Must Contain Only Numbers",
                  },
                })}
                value={book}
                onChange={(e) => setBook(e.target.value)}
              />
            </InputDivs>
            {errors.book && (
              <p style={{ color: "red", fontSize: "0.8", textAlign: "right" }}>
                {errors.book.message}{" "}
              </p>
            )}
          </div>
        )}
        {showFurnitureInput && (
          <div>
            <h3>Provide Dimensions</h3>
            <Furn>
              <InputDivs>
                <label>Height </label>
                <Input
                  type="text"
                  placeholder="height"
                  {...register("height", {
                    required: "Height is required",
                    pattern: {
                      value: /^\d+$/,
                      message: "Must Contain Only Numbers",
                    },
                  })}
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </InputDivs>
              {errors.height && (
                <p
                  style={{
                    color: "red",
                    fontSize: "0.8",
                    textAlign: "right",
                  }}
                >
                  {errors.height.message}{" "}
                </p>
              )}
              <InputDivs>
                <label>Width</label>
                <Input
                  type="text"
                  placeholder="width"
                  {...register("width", {
                    required: "Width is required",
                    pattern: {
                      value: /^\d+$/,
                      message: "Must Contain Only Numbers",
                    },
                  })}
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                />
              </InputDivs>
              {errors.width && (
                <p
                  style={{
                    color: "red",
                    fontSize: "0.8",
                    textAlign: "right",
                  }}
                >
                  {errors.width.message}{" "}
                </p>
              )}
              <InputDivs>
                <label>Length</label>
                <Input
                  type="text"
                  placeholder="Length"
                  {...register("length", {
                    required: "Length is required",
                    pattern: {
                      value: /^\d+$/,
                      message: "Must Contain Only Numbers",
                    },
                  })}
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                />
              </InputDivs>
              {errors.length && (
                <p
                  style={{
                    color: "red",
                    fontSize: "0.8",
                    textAlign: "right",
                  }}
                >
                  {errors.length.message}{" "}
                </p>
              )}
            </Furn>
          </div>
        )}
      </FormContainer>
    </Content>
  );
}

export default Product_add_page;
const Select = styled.select`
  padding: 0.4rem 0;
  font-weight: bold;
  outline: none;
  &:focus {
    border: none;
    outline: 1px solid lightgrey;
  }
`;
const Input = styled.input`
  width: 14rem;
  height: 2rem;
  border-radius: 5px;
  text-indent: 10px;
  border: 1px solid lightgrey;
  &:focus {
    outline: 1px solid gray;
  }
  box-shadow: 0 2px 4px lightgrey;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const InputDivs = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
`;

const Furn = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 1rem;
  justify-content: space-between;
  width: 25rem;
  @media (width < 500px) {
    width: 20rem;
  }
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
    width: 22rem;
  }
`;
const BtnSave = styled.button`
  text-transform: uppercase;
  padding: 0.5rem 0.5rem;
  background-color: whitesmoke;
  margin: 0 0.5rem;
  border: 1px solid lightgrey;
  cursor: pointer;
  border-radius: 5px;
`;
const BtnCancel = styled.button`
  text-transform: uppercase;
  padding: 0.5rem 0.5rem;
  border: 1px solid lightgrey;
  background-color: whitesmoke;
  cursor: pointer;
  border-radius: 5px;
`;
const Container = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.6rem;
`;
