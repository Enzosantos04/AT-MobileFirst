import Buttons from "./buttons";
// import styles from "./ex3.module.css";
import { useState } from "react";
import Images from "./images";
export default function Exercicio3() {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);

  const addImage = () => {
    const newImage = `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`;

    if (count < 5) {
      setCount(count + 1);
      setImages([...images, newImage]);
    }
  };

  const removeImage = () => {
    if (count > 0) {
      setCount(count - 1);
      setImages(images.slice(0, -1));
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
      <Images images={images} />
    </div>
  );
}
