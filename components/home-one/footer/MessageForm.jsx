"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import ArrowRight3Img from "../../../public/images/icon/arrow-right3.svg";
import Field from "../../common/Field";

function MessageForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		console.log("Submite Form Data = ", formData);
	};

	return (
		<form onSubmit={handleSubmit(submitForm)}>
			<div className="aximo-form-field">
				<Field error={errors.name}>
					<input
						{...register("name", { required: "Name is required." })}
						type="text"
						name="name"
						id="name"
						placeholder="Adınız"
					/>
				</Field>
			</div>
			<div className="aximo-form-field">
				<Field error={errors.email}>
					<input
						{...register("email", { required: "Email is required." })}
						type="email"
						name="email"
						id="email"
						placeholder="Email adresiniz"
					/>
				</Field>
			</div>
			<div className="aximo-form-field">
				<input type="text" placeholder="Telefon numaranız" />
			</div>
			<div className="aximo-form-field">
				<textarea name="textarea" placeholder="Mesajınız"></textarea>
			</div>
			<button id="aximo-submit-btn" type="submit">
				Mesaj gönder{" "}
				<span>
					<Image src={ArrowRight3Img} alt="ArrowRight3Img" />
				</span>
			</button>
		</form>
	);
}

export default MessageForm;
