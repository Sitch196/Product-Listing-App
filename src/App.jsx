import { useEffect } from "react";
import { useState } from "react";
import Spinner from "./Spinner";
import styled from "styled-components";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async function () {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    const Delay = setTimeout(() => {
      getData();
    }, 2000);

    return () => clearTimeout(Delay);
  }, []);

  return (
    <div>
      {loading && (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      )}
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.name} {item.phone} {item.website}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
