import {
  Box,
  Card,
  CardContent,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import styles from "./ex12.module.css";
import { TiShoppingCart } from "react-icons/ti";
export default function CartList({ items }) {
  const totalCompra = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <Box className={styles.box}>
      <Paper elevation={3} square={false} className={styles.paper}>
        <Typography variant="h5" align="center" fontWeight={700}>
          <TiShoppingCart size={24} /> Carrinho de compras
        </Typography>
        <Stack spacing={2} className={styles.list}>
          {items.map((item, index) => {
            const totalItem = item.price * item.quantity;

            return (
              <Card key={index} variant="outlined" className={styles.itemCard}>
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
                    {item.name}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Preço: R$ {item.price.toFixed(2)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Qtd: {item.quantity}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontWeight={700}
                    className={styles.itemTotal}
                  >
                    Total: R$ {totalItem.toFixed(2)}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Stack>
        ;
        <Paper variant="outlined" className={styles.totalBox}>
          <Typography variant="subtitle1" color="text.secondary">
            Total da compra
          </Typography>
          <Typography
            variant="h5"
            fontWeight={800}
            className={styles.totalPrice}
          >
            R$ {totalCompra.toFixed(2)}
          </Typography>
        </Paper>
      </Paper>
    </Box>
  );
}
