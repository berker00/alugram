import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import Image from "next/image";
import Link from "next/link";
import ShapeImg from "../../../public/images/v1/shape1.png";
import StarImg from "../../../public/images/v1/star.png";
import User1Img from "../../../public/images/v1/user1.png";
import User2Img from "../../../public/images/v1/user2.png";
import User3Img from "../../../public/images/v1/user3.png";
function HeroContent() {
	return (
		<FadeInStaggerTwo className="aximo-hero-content">
			<FadeInStaggerTwoChildren>
				<h1>
					<span className="aximo-title-animation">
						Alugram
						<Image src={StarImg} alt="StarImg" />
					</span>{" "}
					design studio
				</h1>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<p>
					{`Alugram ile markanızı yenilikçi tasarımlarla zirveye taşıyın. İsim bulma, logo tasarımı, ambalaj, grafik, video prodüksüyon ve daha fazlasında uzmanız - vizyonunuzu hayata geçiriyoruz.`}
				</p>
			</FadeInStaggerTwoChildren>

			<FadeInStaggerTwoChildren>
				<Link className="aximo-call-btn" href="/contact-us" style={{ backgroundColor: "#203977" }}>
					Bizimle iletişime geçin <i className="icon-call"></i>
				</Link>
				<div className="aximo-hero-shape">
					<Image src={ShapeImg} alt="ShapeImg" />
				</div>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default HeroContent;
