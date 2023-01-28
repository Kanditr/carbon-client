import axios from "axios";

export async function getAllProduct() {
  const products = await axios.get("/api/product/all");
  console.log(products.data);
  return products;
}
