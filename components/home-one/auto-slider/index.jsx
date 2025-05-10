"use client";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Star3Img from "../../../public/images/v1/star3.png";
import { safeRandomUUID } from "@/utils/generateId";

const sliderData = [
	{
		id: safeRandomUUID(),
		title: "UI/UX Design",
		img: Star3Img,
	},
	{
		id: safeRandomUUID(),
		title: "Alugram",
		img: Star3Img,
	},
	{
		id: safeRandomUUID(),
		title: "Product Design",
		img: Star3Img,
	},
	{
		id: safeRandomUUID(),
		title: "Alugram",
		img: Star3Img,
	},
	{
		id: safeRandomUUID(),
		title: "Graphic Design",
		img: Star3Img,
	},
	{
		id: safeRandomUUID(),
		title: "Alugram",
		img: Star3Img,
	},
	{
		id: safeRandomUUID(),
		title: "Video Production",
		img: Star3Img,
	},
	{
		id: safeRandomUUID(),
		title: "Alugram",
		img: Star3Img,
	},
	{
		id: safeRandomUUID(),
		title: "Brand Coordination",
		img: Star3Img,
	},
	{
		id: safeRandomUUID(),
		title: "Alugram",
		img: Star3Img,
	},
	{
		id: safeRandomUUID(),
		title: "Custom Design",
		img: Star3Img,
	},
	{
		id: safeRandomUUID(),
		title: "Alugram",
		img: Star3Img,
	},

];

const swiperSettings = {
	centeredSlides: true,
	speed: 6000,
	autoplay: {
		delay: 1,
	},
	loop: true,
	slidesPerView: "auto",
	allowTouchMove: false,
	modules: [Autoplay],
};

function AutoSlider() {
	return (
		<div className="aximo-auto-slider-section">
			<div className="swiper aximo-auto-slider">
				{
					<Swiper {...swiperSettings}>
						{sliderData.map((item) => (
							<SwiperSlide key={item.id}>
								<div className="aximo-auto-slider-item">
									<h3>{item.title}</h3>
									<Image src={item.img} alt={item.title} />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				}
			</div>
		</div>
	);
}

export default AutoSlider;
