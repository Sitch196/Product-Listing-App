import { ProductProvider } from "./Context";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Product_add_page from "./Components/Product_add_page";
import Product_list_page from "./Components/Product_list_page";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
      padding:0;
      font-family: 'poppins'
  }

`;
function App() {
  return (
    <ProductProvider>
      <AppContainer>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Product_list_page />} />
          <Route path="product_add_page" element={<Product_add_page />} />
        </Routes>
      </AppContainer>
    </ProductProvider>
  );
}

export default App;
const AppContainer = styled.div`
  height: 96vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
