// interface TabDescriptionProps {
//   description: string;
// }
// const TabDescription: React.FC<TabDescriptionProps> = ({ description }) => {
//   return (
//     <p className=" font-normal text-fs_7 text-black mt-1">{description}</p>
//   );
// };

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// export default TabDescription;

interface TabDescriptionProps {
  description: string;
  products: Array<{
    id: number;
    product_sets: {
      id: number;
      article: string;
      name: string;
      description: string;
      images_set: Array<{
        id: string;
        image_url: string;
      }>;
    };
    quantity: number;
  }>;
}



const GiftTabDescription: React.FC<TabDescriptionProps> = ({
  description,
  products,
}) => {
  // console.log(products);
  
  return (
    <div > 
      <p className="font-normal text-fs_7 text-black mt-1 ">{description}</p>
      {products && products.length > 0 && (
        <div className="products-list mt-24 grid grid-cols-1 md:grid-cols-2 gap-16">
          {products.map((product) => (
            <div key={product.id} className="product-card mb-4 flex">
              <div className="w-full md:w-[50%] ">
                <div className="images-set">
                  <Swiper
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                    }}
                    loop
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="h-full"
                    style={{ mixBlendMode: "multiply" }}
                  >
                    {product.product_sets.images_set.map((image, index) => (
                      <SwiperSlide key={index} className="w-full h-full">
                        <div className="relative h-full">
                          <div className="flex justify-center items-center h-full">
                            <img
                              key={image.id}
                              src={image.image_url}
                              alt={product.product_sets.name}
                              className="product-image w-2/3"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>       
              <div className="w-full md:w-1/2 ml-4 md:ml-2">
                <h3 className="font-semibold">{product.product_sets.name}</h3>
                <p className="text-[12px] mb-4">{product.product_sets.article}</p>
                <p className="text-2xl font-semibold mb-4">{product.product_sets.price}</p>
                {/* <p>{product.product_sets.description}</p> */}
              </div>
              <div className="flex flex-col justify-center gap-5">
                <div>
                  x
                </div>
                <div>
                  +
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GiftTabDescription;

