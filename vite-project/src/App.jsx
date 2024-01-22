import "./App.css";
import imageData from "./DataComponent";

function App() {
  const image = imageData();

  return (
    <div>
      <h3>Kalvium Gallery</h3>
      <div id="parent">
        {image.map((element) => {
          return (
            <div>
              <img src={element.img} alt="image" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
