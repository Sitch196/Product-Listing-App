import React, { useState, useContext } from "react";
import {
  Select,
  Input,
  Content,
  InputDivs,
  Furn,
  FormContainer,
  BtnSave,
  BtnCancel,
  Container,
  Logo,
} from "../style/productadd";
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

  return (
    <Content>
      <Container>
        <Logo>Products Add</Logo>
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
              required: "Please, submit required data",
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: "Please, provide the data of indicated type",
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
              required: "Please, submit required data",
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: "Please, provide the data of indicated type",
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
              required: "Please, submit required data",
              min: 0,
              pattern: {
                value: /^\d+$/,
                message: "Please, provide the data of indicated type",
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
            {...register("type", {
              required: "Please select a type",
              validate: (value) =>
                value !== "Type Switcher" || "Please select a type",
            })}
            onChange={(e) => {
              setShowDVDInput(e.target.value === "DVD");
              setShowBookInput(e.target.value === "Book");
              setShowFurnitureInput(e.target.value === "Furniture");
            }}
          >
            <option value="Type Switcher">Type Switcher</option>
            <option value="DVD">DVD</option>
            <option value="Book">Book</option>
            <option value="Furniture">Furniture</option>
          </Select>
        </InputDivs>
        {errors.type && (
          <p style={{ color: "red", fontSize: "0.8", textAlign: "right" }}>
            {errors.type.message}{" "}
          </p>
        )}

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
                  required: "Please, submit required data",
                  pattern: {
                    value: /^\d+$/,
                    message: "Please, provide the data of indicated type",
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
                  required: "Please, submit required data",
                  pattern: {
                    value: /^\d+$/,
                    message: "Please, provide the data of indicated type",
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
                <label>Height (Cm) </label>
                <Input
                  type="text"
                  placeholder="height"
                  {...register("height", {
                    required: "Please, submit required data",
                    pattern: {
                      value: /^\d+$/,
                      message: "Please, provide the data of indicated type",
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
                <label>
                  Width
                  <br />
                  (Cm)
                </label>
                <Input
                  type="text"
                  placeholder="width"
                  {...register("width", {
                    required: "Please, submit required data",
                    pattern: {
                      value: /^\d+$/,
                      message: "Please, provide the data of indicated type",
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
                <label>Length (Cm)</label>
                <Input
                  type="text"
                  placeholder="Length"
                  {...register("length", {
                    required: "Please, submit required data",
                    pattern: {
                      value: /^\d+$/,
                      message: "Please, provide the data of indicated type",
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
