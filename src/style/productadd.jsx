import styled from "styled-components";

export const Select = styled.select`
  padding: 0.4rem 0;
  font-weight: bold;
  outline: none;
  &:focus {
    border: none;
    outline: 1px solid lightgrey;
  }
`;

export const Logo = styled.h1`
  @media (width < 400px) {
    font-size: 1.5rem;
  }
`;
export const Input = styled.input`
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
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
export const InputDivs = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
`;

export const Furn = styled.div`
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

export const FormContainer = styled.div`
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
    width: 17.3rem;
  }
`;
export const BtnSave = styled.button`
  text-transform: uppercase;
  padding: 0.5rem 0.5rem;
  background-color: whitesmoke;
  margin: 0 0.5rem;
  font-weight: bold;
  border: 1px solid lightgrey;
  cursor: pointer;
  border-radius: 5px;
`;
export const BtnCancel = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  padding: 0.5rem 0.5rem;
  border: 1px solid lightgrey;
  background-color: whitesmoke;
  cursor: pointer;
  border-radius: 5px;
`;
export const Container = styled.div`
  border-bottom: 1px solid lightgrey;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.6rem;
  position: sticky;
  background-color: whitesmoke;
  top: 0;
`;
