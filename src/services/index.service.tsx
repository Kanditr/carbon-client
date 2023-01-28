export async function getAllProduct() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/product/`
    );

    if (response.ok) {
      const products = await response.json();
      console.log(products);
      return products;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error(error);
    return error;
  }
}
