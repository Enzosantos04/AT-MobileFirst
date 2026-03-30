import styles from "./ex6.module.css";
import { TiShoppingCart } from "react-icons/ti";
export default function CartList({ items }) {
  const totalCompra = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h2>
          <TiShoppingCart size={24} /> Carrinho de compras
        </h2>

        <div className={styles.list}>
          {items.map((item, index) => {
            const totalItem = item.price * item.quantity;

            return (
              <div key={index} className={styles.card}>
                <h3>{item.name}</h3>

                <p>Preço: R$ {item.price.toFixed(2)}</p>
                <p>Qtd: {item.quantity}</p>
                <p className={styles.totalItem}>
                  Total: R$ {totalItem.toFixed(2)}
                </p>
              </div>
            );
          })}
        </div>

        <div className={styles.totalBox}>
          <h3>Total da compra</h3>
          <p>R$ {totalCompra.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
