import styled from "styled-components";
import { Link } from "react-router-dom";

export const AddLink = styled(Link)`
  text-decoration: none;
  border: 1px solid lightgrey;
  background-color: whitesmoke;
  font-weight: bold;

  padding: 0.3rem 0.5rem;
  /* margin: 0 1rem; */
  border-radius: 5px;
  &:visited {
    color: black;
  }
`;
export const DeleteBtn = styled.button`
  background-color: whitesmoke;
  padding: 0.5rem 0.5rem;
  border-radius: 5px;
  font-weight: bold;
  border: 1px solid lightgrey;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: rgba(255, 0, 0, 0.8);
    color: whitesmoke;
    font-weight: bold;
  }
`;
export const Logo = styled.h1`
  @media (width < 400px) {
    font-size: 1.5rem;
  }
`;
export const Checkbox = styled.input`
  position: relative;
  right: 5rem;
  top: -0.5rem;
`;
export const ProductWrapper = styled.div`
  padding: 1rem 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
export const Product = styled.div`
  border: 1px solid lightgrey;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  width: 15rem;
  text-align: center;
  padding: 2rem 0;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Header = styled.div`
  border-bottom: 1px solid lightgrey;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.6rem;
  position: sticky;
  top: 0;
`;
export const Buttons_Container = styled.div`
  display: flex;
  gap: 0.5rem;
`;
