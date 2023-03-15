import styled from "styled-components";

function Footer() {
  return (
    <div>
      <hr style={{ borderWidth: "2px" }} />
      <Scandi>
        <h3>Scandiweb Test Assignment</h3>
      </Scandi>
    </div>
  );
}

export default Footer;
const Scandi = styled.div`
  text-align: center;
`;
