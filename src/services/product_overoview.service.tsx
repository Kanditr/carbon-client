async function getOneProduct(id: string) {
  const response = await fetch(`http://localhost:3000/product/${id}`);
  if (response.status == 200) {
    const product = await response.json();
    return product;
  } else {
    throw new Error(response.statusText);
  }
}

async function getAllProduct(id: string) {
  const response = await fetch(`http://localhost:3000/product/`);
  if (response.status == 200) {
    const products = await response.json();
    return products;
  } else {
    throw new Error(response.statusText);
  }
}

export default { getOneProduct, getAllProduct };
