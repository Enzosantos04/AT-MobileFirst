import styles from "./ex3.module.css";
export default function Buttons({ onAddImage, onRemoveImage, count }) {
  return (
    <>
      <div className={styles.buttonsContainer}>
        <button className={styles.myButton} onClick={onAddImage}>
          +
        </button>
        <div className={styles.countContainer}>
          <p>{count}</p>
        </div>
        <button className={styles.myButton} onClick={onRemoveImage}>
          -
        </button>
      </div>
    </>
  );
}
