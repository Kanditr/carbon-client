import type { NextPage } from "next";
import { Product } from "../model/product_overview.model";

const ProductOverview: NextPage<{ product: Product }> = ({ product }) => {
  return (
    <div className="flex pt-24 px-60">
      <h1>Hello there</h1>
    </div>
  );
};

export default ProductOverview;
