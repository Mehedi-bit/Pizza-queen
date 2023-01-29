import styles from "@/styles/PizzaCard.module.css";
import Image from "next/image";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="200" height="200" />
      <h1 className={styles.title}>SICILIAN PIZZA</h1>
      <span className={styles.price}>$19,00</span>
      <p className={styles.desc}>
        Pillowy dough, a crunchy crust, and robust tomato sauce.
      </p>
    </div>
  );
};

export default PizzaCard;
