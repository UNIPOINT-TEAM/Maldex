import React from "react";
import Slider from "./Slider";

const BannerBottom: React.FC<any> = ({ BannerData }) => {
  return (
    <div className="hidden lg:grid grid-rows-9 grid-cols-5 grid-flow-col gap-3 my-3">
      <div className="row-span-9 bg-white h-[670px] flex items-center">
        <div className="h-[400px] w-full flex items-center justify-center">
          <Slider SliderItems={BannerData && BannerData[4]} sliderTime={3000} />
        </div>
      </div>
      <div className=" col-span-4 row-span-5">
        <div className="grid grid-cols-12 h-full gap-3">
          <div className="col-span-5 bg-white flex items-center justify-center ">
            <div className="w-[200px] flex items-center justify-center">
              <Slider
                SliderItems={BannerData && BannerData[5]}
                sliderTime={4000}
              />
            </div>
          </div>
          <div className="col-span-2 bg-white flex items-center justify-center">
            <div className="w-full flex items-center justify-center">
              <Slider
                SliderItems={BannerData && BannerData[6]}
                sliderTime={4000}
              />
            </div>
          </div>
          <div className="col-span-3 bg-white flex items-center justify-center">
            <div className="w-full flex items-center justify-center">
              <Slider
                SliderItems={BannerData && BannerData[7]}
                sliderTime={4000}
              />
            </div>
          </div>
          <div className="col-span-2">
            <div className="grid grid-rows-2 h-full gap-3 w-full">
              <div className="bg-white w-full flex items-center justify-center">
                <div className="w-[150px] flex items-center justify-center">
                  <Slider
                    SliderItems={BannerData && BannerData[8]}
                    sliderTime={3000}
                  />
                </div>
              </div>
              <div className="bg-white flex items-center justify-center">
                <div className="w-[150px] flex items-center justify-center">
                  <Slider
                    SliderItems={BannerData && BannerData[8]}
                    sliderTime={3000}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 row-span-4 ">
        <div className="grid grid-cols-2 h-full gap-3">
          <div
            className="bg-cover bg-center flex p-3"
            style={{
              backgroundImage: `url(https://s3-alpha-sig.figma.com/img/4baa/4f19/42d368325ca7a54cc8b78c83ce21a46f?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fvHDQCcFIFoZk67nNp5~sBKcNiU4hoLqsNtIZb4iiOkie50PS7C0VeqqfdBm~VrUYY345f8iYfNivV3asrnKaRK4j-cECBIQhpJ7uijyAsAAVApjqE0n7lhktcbxUL7gII-MSX02NShfLRgaKQwpnuTJZ1OA-O7f~1zE5cdesa0Pj6YB7KCWgQ78ql5eRBAPS5k8EqbAi53It8Wwm70PjGYxyun2eMyF-FeasaClWFspjyeKBHd9YzOoTVjskJpqycc3AG7nbvbYYc4iwPtOZdpCJDpvJ4Y4K03AyVSray97k2GZA5IS77m4kEYBwLWMXiDNAMfIOcVEKopu1qeWcw__)`,
            }}
          >
            <p className="text-[#fff] mt-auto tracking-wider text-fs_6">
              Идеи подарков
            </p>
          </div>
          <div
            className="bg-cover bg-center flex p-3"
            style={{
              backgroundImage: `url(https://s3-alpha-sig.figma.com/img/9ecd/ec22/669c4bf2536aa23b60590560e89132e2?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M0Qw4NL34djgPmufLj11GpJTrpZcx3RlZ5ctkDA6Si5u2lQm5ZPfmpZa4~RPq3~GaXmEgzat6kc1X2~SJh4A7UZEpePssW-1b2NWDqx1rAeZFu~c5FGm8QJvLWbmHNt~WBQIrGkyH5PHk9BnkKSSVBmvF2UohI3BBH0ada3UGgffH~-~w8v~AyKBihd~yhXCGn0wHedPokUCEqwcFLz4JvvQk4lkEoOcK8hidZDVpMt1iq1LTIuONsKni92DqZj41K5DwcLeeZFvTPHptD6eCHzS8Vugv3L1svbvivlLnDCGOJzR5efEObyVT0u9nC62LZoF736-Rz8Vj9UXk9yqQA__)`,
            }}
          >
            <p className="text-[#fff] tracking-wider text-fs_6">
              Разработка дизайна
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
