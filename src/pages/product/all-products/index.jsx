import React from "react";
import { useQueryHandler } from "../../../hooks/useQueryHandler";
import Card from "../../../components/card";

function Products() {
  const { data, isLoading, isError } = useQueryHandler({
    pathname: "products",
    url: "product",
  });

  console.log(data);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {data?.map((value) => (
          <Card key={value.id} {...value} />
        ))}
      </div>
    </div>
  );
}

export default Products;
