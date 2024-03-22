import React from "react";
import Slider from "./Slider";
const BannerBottomMobile: React.FC<any> = ({ BannerData }) => {
  return (
    <div className="grid grid-cols-2 mt-2 gap-2 lg:hidden">
      <div className="grid grid-cols-2 gap- ">
        <div className="col-span-2 bg-white h-[65px]  flex items-center justify-center py-3">
          <div className="h-full w-[100px]">
            <Slider
              SliderItems={BannerData && BannerData[1]}
              sliderTime={3000}
            />
          </div>
        </div>
        <div className=" bg-white h-[80px] flex items-center justify-center">
          <div className="h-[50px] w-[50px]">
            <Slider
              SliderItems={BannerData && BannerData[2]}
              sliderTime={3000}
            />
          </div>
        </div>
        <div className=" bg-white h-[80px] flex items-center justify-center">
          <div className="h-[50px] w-[50px]">
            <Slider
              SliderItems={BannerData && BannerData[3]}
              sliderTime={3000}
            />
          </div>
        </div>
      </div>
      <div className="bg-white flex items-center justify-center">
        <div className="h-[100px] w-[100px]">
          <Slider SliderItems={BannerData && BannerData[4]} sliderTime={3000} />
        </div>
      </div>
      <div
        className="bg-cover bg-center flex p-2 lg:p-3 h-[100px]"
        style={{
          backgroundImage: `url(https://s3-alpha-sig.figma.com/img/4baa/4f19/42d368325ca7a54cc8b78c83ce21a46f?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fvHDQCcFIFoZk67nNp5~sBKcNiU4hoLqsNtIZb4iiOkie50PS7C0VeqqfdBm~VrUYY345f8iYfNivV3asrnKaRK4j-cECBIQhpJ7uijyAsAAVApjqE0n7lhktcbxUL7gII-MSX02NShfLRgaKQwpnuTJZ1OA-O7f~1zE5cdesa0Pj6YB7KCWgQ78ql5eRBAPS5k8EqbAi53It8Wwm70PjGYxyun2eMyF-FeasaClWFspjyeKBHd9YzOoTVjskJpqycc3AG7nbvbYYc4iwPtOZdpCJDpvJ4Y4K03AyVSray97k2GZA5IS77m4kEYBwLWMXiDNAMfIOcVEKopu1qeWcw__)`,
        }}
      >
        <p className="text-[#fff] mt-auto tracking-wider font-medium text-fs_8 lg:text-fs_6">
          Идеи подарков
        </p>
      </div>
      <div
        className="bg-cover bg-center p-2 lg:p-3 h-[100px]"
        style={{
          backgroundImage: `url(https://s3-alpha-sig.figma.com/img/9ecd/ec22/669c4bf2536aa23b60590560e89132e2?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M0Qw4NL34djgPmufLj11GpJTrpZcx3RlZ5ctkDA6Si5u2lQm5ZPfmpZa4~RPq3~GaXmEgzat6kc1X2~SJh4A7UZEpePssW-1b2NWDqx1rAeZFu~c5FGm8QJvLWbmHNt~WBQIrGkyH5PHk9BnkKSSVBmvF2UohI3BBH0ada3UGgffH~-~w8v~AyKBihd~yhXCGn0wHedPokUCEqwcFLz4JvvQk4lkEoOcK8hidZDVpMt1iq1LTIuONsKni92DqZj41K5DwcLeeZFvTPHptD6eCHzS8Vugv3L1svbvivlLnDCGOJzR5efEObyVT0u9nC62LZoF736-Rz8Vj9UXk9yqQA__)`,
        }}
      >
        <p className="text-[#fff] tracking-wider font-medium text-fs_8 lg:text-fs_6">
          Разработка дизайна
        </p>
      </div>
    </div>
  );
};

export default BannerBottomMobile;
