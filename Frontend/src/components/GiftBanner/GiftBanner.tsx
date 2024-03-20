import { useEffect } from "react";
import {  GiftBannerBottom, GiftBannerSlider, LeftAccordion } from "..";
import { useFetchHook } from "../../hooks/UseFetch";

const GiftBanner = () => {
  const { fetchData, response } = useFetchHook();
  useEffect(() => {
    fetchData({ method: "GET", url: "/banner" });
  }, []);
  return (
<<<<<<< HEAD
    <div className="container_xxl px-3 my-10">
      <div className="lg:flex gap-3">
        <div className="w-1/5 hidden lg:block">
          <LeftAccordion />
        </div>
        <div className="flex flex-col gap-2.5 lg:w-4/5 ">
          <div className=" lg:h-[430px]">
            <GiftBannerSlider />
          </div>
          <GiftBannerBottom BannerData={response} />
=======
    <div className="container_xxl px-10 my-10">
      <div className="flex gap-3">
        <div className="w-1/5">
          <LeftAccordion />
        </div>
        <div className="flex flex-col gap-2.5 w-4/5 ">
          <div className="h-[430px]">
            <BannerSlider />
          </div>
          <GiftBannerBottom />
>>>>>>> b72aced1b1de90f432cd87926d1b10d68b2f90bf
        </div>
      </div>
    </div>
  );
};

export default GiftBanner;
