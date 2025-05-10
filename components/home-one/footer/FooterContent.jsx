import Image from "next/image";
import Shape1Img from "../../../public/images/v1/shape1.png";
import Star2Img from "../../../public/images/v1/star2.png";
function FooterContent() {
	return (
		<div className="aximo-default-content light position-relative">
			<h2>
				<span className="aximo-title-animation">
					Birlikte bir
					<span className="aximo-title-icon">
						<Image src={Star2Img} alt="Star2Img" />
					</span>
				</span>
				<br />
				projeye başlayalım
			</h2>
			<p>
			Müşterilerimizin hedeflerini, hedef kitlelerini ve özel ihtiyaçlarını anlamak için onlarla yakın bir şekilde çalışıyoruz. Bu gereksinimleri yaratıcı yeteneklerimizi kullanarak pratik tasarım çözümlerine dönüştürüyoruz.
			</p>
			<div className="aximo-info-wrap">
				<div className="aximo-info">
					<ul>
						<li>Give us a call:</li>
						<li>
							<a href="tel:(123) 456-7890">(123) 456-7890</a>
						</li>
					</ul>
				</div>
				<div className="aximo-info">
					<ul>
						<li>Send us an email:</li>
						<li>
							<a href="mailto:info@mthemeus.com">info@alugram.com</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="aximo-social-icon social-large">
				<ul>
					<li>
						<a href="https://www.instagram.com/" target="_blank">
							<i className="icon-instagram"></i>
						</a>
					</li>
				</ul>
			</div>
			<div className="aximo-hero-shape aximo-footer-shape">
				<Image src={Shape1Img} alt="Shape1Img" />
			</div>
		</div>
	);
}

export default FooterContent;
