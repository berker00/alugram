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
						<li>Bizi Arayın:</li>
						<li>
							<a href="https://wa.me/905444152841">+90 (544) 415 2841</a>
						</li>
					</ul>
				</div>
				<div className="aximo-info">
					<ul>
						<li>Bize email gönderin:</li>
						<li>
							<a href="mailto:info@alugram.com">info@alugram.com</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="aximo-social-icon social-large">
				<ul>
					<li>
						<a href="https://www.instagram.com/alugramcom" target="_blank">
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
