import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { getAllProduct } from "../services/index.service";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Hello Carbon</h1>
      <button onClick={getAllProduct}>Call API</button>
    </div>
  );
};

export default Home;
