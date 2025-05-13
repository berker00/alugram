import Image from "next/image";
import Call2Img from "../../public/images/icon/call2.svg";
import EmailImg from "../../public/images/icon/email.svg";
import MapImg from "../../public/images/icon/map.svg";
import Star2Img from "../../public/images/v1/star2.png";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../animation/FadeInStaggerTwo";
function ContactInfo() {
	return (
		<div className="aximo-contact-info-section">
			<div className="container">
				<div className="aximo-contact-info-title">
					<h2>
						<span className="aximo-title-animation">
							İletişim Bilgileri
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="Star" />
							</span>
						</span>
					</h2>
				</div>
				<FadeInStaggerTwo className="row">
					<FadeInStaggerTwoChildren className="col-xl-4 col-md-6">
						<div className="aximo-contact-info-box">
							<div className="aximo-contact-info-icon">
								<Image src={Call2Img} alt="Call Img" />
							</div>
							<div className="aximo-contact-info-data">
								<span>Numaramız</span>
								<p><a href=" https://wa.me/905444152841">+90 (544) 415 2841</a></p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="col-xl-4 col-md-6">
						<div className="aximo-contact-info-box">
							<div className="aximo-contact-info-icon">
								<Image src={EmailImg} alt="Email" />
							</div>
							<div className="aximo-contact-info-data">
								<span>Email Adresimiz</span>
								<p><a href="mailto:info@alugram.com">info@alugram.com</a></p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="col-xl-4 col-md-6">
						<div className="aximo-contact-info-box">
							<div className="aximo-contact-info-icon">
								<Image src={MapImg} alt="Map" />
							</div>
							<div className="aximo-contact-info-data">
								<span>Ofisimizin Adresi</span>
								<p>İstanbul / KDZ.Ereğli</p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
				</FadeInStaggerTwo>
			</div>
		</div>
	);
}

export default ContactInfo;
