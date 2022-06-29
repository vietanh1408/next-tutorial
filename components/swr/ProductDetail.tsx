import React from "react";
import useSWR from "swr";

interface ProductDetailProps {
  data: any;
}

const ProductDetail = () => {
  const { data, error, mutate, isValidating } = useSWR(`/products`);

  console.log("data: ", data);

  return <div>ProductDetail</div>;
};

export default ProductDetail;
