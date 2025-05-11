"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import ContactThumb from "../../public/images/contact/contact-thumb.png";
import Star2Img from "../../public/images/v1/star2.png";
import FadeInRight from "../animation/FadeInRight";
import Field from "../common/Field";
function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		console.log("Submite Form Data = ", formData);
	};
	return (
		<div className="section aximo-section-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="aximo-section-title">
							<h2>
								<span className="aximo-title-animation">
									Bizimle iletişime geçin
									<span className="aximo-title-icon">
										<Image src={Star2Img} alt="Star" />
									</span>
								</span>
								
							</h2>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="aximo-contact-thumb ">
							<Image src={ContactThumb} alt="Contact Thumb" />
						</FadeInRight>
					</div>
					<div className="col-lg-7">
						<div className="aximo-main-form">
							<form onSubmit={handleSubmit(submitForm)}>
								<div className="aximo-main-field">
									<Field label="Adınız" error={errors.name}>
										<input
											{...register("name", { required: "Burası boş bırakılamaz." })}
											type="name"
											name="name"
											id="name"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<Field label="Email Adresiniz" error={errors.email}>
										<input
											{...register("email", { required: "Email Adresiniz gereklidir." })}
											type="email"
											name="email"
											id="email"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<Field label="Telefon Numaranız" error={errors.phone}>
										<input
											{...register("phone", { required: "Telefon Numarası gereklidir." })}
											type="phone"
											name="phone"
											id="phone"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<label>Mesajınızı buraya yazınız...</label>
									<textarea name="textarea"></textarea>
								</div>
								<button id="aximo-main-btn" type="submit">
									Mesaj Gönder
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
