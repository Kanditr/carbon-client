async function getOneProduct(id: string) {
  const response = await fetch(`${process.env.API_BASE_URL}/v1/product/${id}`);
  if (response.status == 200) {
    const product = await response.json();
    return product;
  } else {
    throw new Error(response.statusText);
  }
}

export default { getOneProduct };
