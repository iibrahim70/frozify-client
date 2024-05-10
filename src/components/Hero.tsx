"use client";

// Import Swiper components & Image
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

// Import banner assets
import bannerTwo from "@/assets/banner/banner-2.jpg";
import bannerThree from "@/assets/banner/banner-3.jpg";
import bannerFour from "@/assets/banner/banner-4.jpg";
import bannerFive from "@/assets/banner/banner-5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const bannerImages = [bannerTwo, bannerThree, bannerFour, bannerFive];

const Hero = () => {
  return (
    <section>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {/* First Swiper slide with the MP4 video */}
        <SwiperSlide>
          <video
            autoPlay
            loop
            muted
            src={require("../assets/banner/banner-1.mp4")}
          />
        </SwiperSlide>

        {/* Dynamically render Swiper slides for JPG banner images */}
        {bannerImages.map((banner, index) => (
          <SwiperSlide key={index}>
            <Image
              src={banner}
              alt={`Banner ${index + 2}`}
              placeholder="blur"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
