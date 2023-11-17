import { useState } from "react";

function App() {
  //Modal 기능
  const [modal, setModal] = useState(true);

  const [name, setName] = useState(["Mike", "Jane", "Susan"]);
  const [like, setLike] = useState([0, 0, 0]);

  return (
    <div className="App">
      <h1>React App</h1>
      <h2>Modal</h2>
      {/* Modal 기능 */}
      <div>
        <button
          onClick={() => {
            setModal(!modal);
          }}
        >
          button
        </button>
        {modal ? <h5>Modal Modal Modal </h5> : null}
      </div>

      <div>
        {name.map((item, index) => {
          return (
            <>
              <h4 key={index}>
                {item} {like[index]}
              </h4>
              <button
                onClick={() => {
                  const newLike = [...like];
                  newLike[index]++;
                  setLike(newLike);
                }}
              >
                👍
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
