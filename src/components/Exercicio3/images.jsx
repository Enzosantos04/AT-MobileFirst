import styles from "./ex3.module.css";
export default function Images({ images }) {
  return (
    <div className={styles.imagesContainer}>
      {images.map((img, index) => (
        <img key={index} src={img} alt="Imagem" />
      ))}
    </div>
  );
}
