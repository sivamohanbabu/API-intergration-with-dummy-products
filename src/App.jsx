import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((Response) => Response.json())
      .then((data) => {
        setData(data.products);
        console.log(data);
      });
  }, []);
  return (
    <table>
      {data.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>
            <img src={item.images} width={200} height={200} />
          </td>
        </tr>
      ))}
    </table>
  );
}

export default App;
