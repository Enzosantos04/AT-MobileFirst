import Buttons from "./buttons";
// import styles from "./ex3.module.css";
import { useState } from "react";
export default function Exercicio3() {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);

  const addImage = () => {
    const newImage = `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`;
    setImages([...images, newImage]);
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const removeImage = () => {
    setImages(images.slice(0, -1));
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <Buttons
        onAddImage={addImage}
        onRemoveImage={removeImage}
        count={count}
        btnMessage={"-"}
      />
      <div>
        {images.map((img, index) => (
          <img key={index} src={img} alt="Imagem" />
        ))}
      </div>
    </div>
  );
}
