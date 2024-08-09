import { useEffect, useState } from "react";
import { useFetchHook } from "../../hooks/UseFetch";
import ProductNav from "./ProductNav";
import SliderProduct from "./SliderProduct";
const TOKEN = localStorage.getItem("token");
// Define a type for the status
type StatusType = "hit" | "new";
const filterData: Record<
  StatusType,
  {
    query: string;
    title: string;
    color: "green" | "red" | "gray";
  }
> = {
  hit: {
    query: `is_hit=true`,
    title: "hits!",
    color: "green",
  },
  new: {
    query: `is_new=true`,
    title: "new!",
    color: "red",
  },
};
const MainProductFilter: React.FC<{
  status: StatusType;
  subCategories?: any;
}> = ({ status, subCategories }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);
  const { fetchData: productsFetch, response: products } = useFetchHook();

  useEffect(() => {
    if (activeCategoryId) {
      if (TOKEN) {
        productsFetch({
          method: "GET",
          url: `product/?category_id=${activeCategoryId}&${filterData[status].query}`,
          headers: { Authorization: `Bearer ${TOKEN}` },
        });
      } else {
        productsFetch({
          method: "GET",
          url: `product/?category_id=${activeCategoryId}&${filterData[status].query}`,
        });
      }
    }
  }, [status, activeCategoryId]);

  return (
    <>
      <ProductNav
        title={filterData[status].title}
        color={filterData[status].color}
        activeCategoryId={activeCategoryId}
        setActiveCategoryId={setActiveCategoryId}
        query={filterData[status].query}
      />
      <SliderProduct
        products={products?.results}
        activeCategoryId={activeCategoryId}
        subCategories={subCategories}
        y
      />
    </>
  );
};

export default MainProductFilter;
