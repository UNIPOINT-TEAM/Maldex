import brand1 from "../../assets/brands/Untitled-1 1.png";
import brand2 from "../../assets/brands/Untitled-1 2.png";
import brand3 from "../../assets/brands/Untitled-1 3.png";
import brand4 from "../../assets/brands/Untitled-1 4.png";
import brand5 from "../../assets/brands/Untitled-1 5.png";
import brand6 from "../../assets/brands/Untitled-1 6.png";
import brand7 from "../../assets/brands/Untitled-1 7.png";
import brand8 from "../../assets/brands/Untitled-1 8.png";
import brand9 from "../../assets/brands/Untitled-1 9.png";
import brand10 from "../../assets/brands/Untitled-1 10.png";
import brand11 from "../../assets/brands/Untitled-1 11.png";
import brand12 from "../../assets/brands/Untitled-1 12.png";
import brand13 from "../../assets/brands/Untitled-1 13.png";
import brand14 from "../../assets/brands/Untitled-1 14.png";
import brand15 from "../../assets/brands/Untitled-1 15.png";
import brand16 from "../../assets/brands/Untitled-1 16.png";
import brand17 from "../../assets/brands/Untitled-1 17.png";
import brand18 from "../../assets/brands/Untitled-1 18.png";

function Brands() {
  const brands = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
    brand9,
    brand10,
    brand11,
    brand12,
    brand13,
    brand14,
    brand15,
    brand16,
    brand17,
    brand18,
  ];

  // const firstColumn = brands.slice(0, 9);
  // const secondColumn = brands.slice(9);
  return (
    <>
      <div className="container_xxl">
        <div>
          <h1 className="text-2xl font-bold">Наши бренды</h1>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-4">
          {brands.map((brand, index) => (
            <img
              key={index}
              src={brand}
              alt={`Brand ${index + 1}`}
              className="w-full h-auto"
            />
          ))}
<<<<<<< HEAD
=======
  const firstColumn = brands.slice(0, 9);
  const secondColumn = brands.slice(9);
  return (
    <>
      <div>
        <div className="container_xxl">
          <div>
            <h1>Наши бренды</h1>
          </div>

          <div className="flex justify-between">
            {firstColumn.map((brand, index) => (
              <img
                key={index}
                src={brand}
                alt={`Brand ${index + 1}`}
                // className="w-full h-auto mb-2"
              />
            ))}
          </div>
          <div className="flex justify-between">
            {secondColumn.map((brand, index) => (
              <img
                key={index}
                src={brand}
                alt={`Brand ${index + 10}`}
                // className="w-full h-auto mb-2"
              />
            ))}
          </div>
>>>>>>> ddec433 (add page 404)
=======
>>>>>>> 0facdc4 (restart branch 2)
        </div>
      </div>
    </>
  );
}

export default Brands;
