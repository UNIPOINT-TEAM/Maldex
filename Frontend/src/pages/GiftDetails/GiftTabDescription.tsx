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
  return (
    <div>
      <p className="font-normal text-fs_7 text-black mt-1">{description}</p>
      {products && products.length > 0 && (
        <div className="products-list mt-4">
          {products.map((product) => (
            <div key={product.id} className="product-card mb-4 flex">
              <div className="w-1/3">
                <div className="images-set">
                  {/* {product.product_sets.images_set.map((image) => (
                  <img
                    key={image.id}
                    src={image.image_url}
                    alt={product.product_sets.name}
                    className="product-image"
                  />
                ))} */}

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
                    {product.product_sets.images_set.map((image) => (
                      <SwiperSlide
                        // key={e.id}
                        className="w-full h-full "
                        // @ts-expect-error: This
                        onClick={() => handleOpen(item)}
                      >
                        <div className="relative h-full">
                          <div className="flex justify-center items-center h-full ">
                            {/* <img
                            className="mb-2 w-[50px] h-[50px] object-contain product-img "
                            src={e?.image_url ? e?.image_url : e?.image}
                            alt=""
                            loading="lazy"
                          /> */}
                            <img
                              key={image.id}
                              src={image.image_url}
                              alt={product.product_sets.name}
                              className="product-image"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div className="w-1/3">
                <h3>{product.product_sets.name}</h3>
                <p>Article: {product.product_sets.article}</p>
                <p>Description: {product.product_sets.description}</p>
                <p>Quantity: {product.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GiftTabDescription;
