export const generateQueryString = (filterData) => {
  if (!filterData) return "";
  const queryParameters = [];
  const addQueryParam = (key, value) => {
    if (value) queryParameters.push(`${key}=${value}`);
  };

  const selectedMaterials = Object.keys(filterData.materials).filter(
    (key) => filterData.materials[key]
  );
  const selectedBrands = Object.keys(filterData.brands).filter(
    (key) => filterData.brands[key]
  );

  addQueryParam("material", selectedMaterials.join(","));
  addQueryParam("brand", selectedBrands.join(","));
  addQueryParam("color", filterData.colors);
  addQueryParam("size", filterData.size);
  addQueryParam("warehouse", filterData.location);
  addQueryParam("quantity", filterData.quantity);
  addQueryParam(
    "price",
    [filterData.price?.min_price, filterData.price?.max_price]
      .filter(Boolean)
      .join(",")
  );
  addQueryParam("gender", filterData.gender);
  addQueryParam("print_type", filterData.print_type);

  return `${queryParameters.join("&")}`;
};
