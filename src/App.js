import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Plan from "./Plan";
import { useState } from "react";

function App() {
  const [item, setitem] = useState([]);
  const [text, settext] = useState("");

  const handleChange = (e) => {
    settext(e.target.value);
  };
  const handleAdd = (e) => {
    if (item !== "") {
      const newitem = [...item, text];
      setitem(newitem);
      settext(text);
      console.log(text);
    }
  };
  const handleDelete = (id) => {
    const oldItem = [...item];
    console.log(oldItem, id);
    const data = oldItem.filter((element, i) => {
      return i !== id;
    });
    console.log(data, id);
    setitem(data);
  };

  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
          <h1 className="text-center">Today's Plan</h1>
          <div className="container-fluid">
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write your plan"
                  value={text}
                  onChange={handleChange}
                />
              </div>
              <div className="col-2">
                <button
                  className="btn btn-warning px-5 fw-bold"
                  onClick={handleAdd}
                >
                  Add{" "}
                </button>
              </div>
            </div>
            <div className="container">
              <ul className="list-unstyle row m-5">
                {item.map((value, i) => {
                  return (
                    <Plan
                      key={i}
                      id={i}
                      value={value}
                      sendData={handleDelete}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
