import styles from "@/styles/OrderDetail.module.css";
import { useState } from "react";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>You will pay $12 after delivery.</h1>
        <div className={styles.item}>
          <label className={styles.label}>Name or surname</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Adam"
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Phone number</label>
          <input
            className={styles.input}
            type="text"
            placeholder="+880 1700 000000"
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Address</label>
          <textarea
            rows={5}
            placeholder="Ghorashal 86/BE"
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>
        <button className={styles.button} onClick={handleClick}>
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
