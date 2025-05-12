import FadeInStagger from "@/components/animation/FadeInStagger";
import Image from "next/image";
import Star2Img from "../../../public/images/v1/star2.png";
import Thumb1Img from "../../../public/images/v1/t_thumb1.png";
import Thumb2Img from "../../../public/images/v1/t_thumb2.png";
import Thumb3Img from "../../../public/images/v1/t_thumb3.png";
import Thumb4Img from "../../../public/images/v1/t_thumb4.png";
import TestimonialCard from "./TestimonialCard";
import { safeRandomUUID } from "@/utils/generateId";

const testimonialsData = [
	{
		id: safeRandomUUID(),
		rating: 5,
		title: "Markamızı Tam Anlamıyla Yansıtan Bir Logo Oldu",
		description:
			"Alugram ile çalışmak benim için inanılmaz bir deneyimdi! Markam için tasarladıkları logo tam anlamıyla bir başyapıt. Öyle özgün ve etkileyici ki, markam artık gerçekten vazgeçilmez ve iz bırakıcı bir logoya sahip. İlk gördüğüm anda bu tasarımın markamın ruhunu kusursuzca yansıttığını hissettim. Alugram’ın yaratıcılığı ve profesyonel yaklaşımı sayesinde işim çok daha dikkat çekici bir hale geldi. Herkese gönül rahatlığıyla öneriyorum!",
		author: "",
		designation: "",
		img: Thumb1Img,
	},
	{
		id: safeRandomUUID(),
		rating: 4,
		title: "Videolarımız Sayesinde Sosyal Medyada Fark Yaratıyoruz",
		description:
			"Alugram’ın sosyal medya videolarım için yaptığı montajlar beni hayran bıraktı! Video montajlarının kalitesi o kadar üst düzey ki, her bir kare adeta sanat eseri gibi işlenmiş. Renkler, geçişler, her şey o kadar uyumlu ki, izleyici kitlesine gerçekten güzel bir şekilde hitap ediyor. Bu kaliteli editler sayesinde takipçilerimle bağım güçlendi ve markam sosyal medyada parlamaya başladı. Alugram işinde gerçekten çok iyi, teşekkürler!",
		author: "",
		designation: "",
		img: Thumb2Img,
	},
	{
		id: safeRandomUUID(),
		rating: 5,
		title: "Kullanması Kolay ve Göz Alıcı Bir Siteye Kavuştuk",
		description:
			"Alugram’dan web sitemi yaptırdım ve sonuçtan çok memnunum! Admin paneli sayesinde web sitesinin kullanımı inanılmaz derecede kolaylaştı; her şeyi tek bir tıkla yönetebiliyorum, bu benim için büyük bir rahatlık. Tasarım ise tam anlamıyla şık ve modern, Alugram’ın tasarım konusunda gerçekten iyi olduğunu her detayda hissettiriyor. Markamın profesyonel yüzünü bu kadar güzel yansıttıkları için minnettarım, harika bir ekip!",
		author: "",
		designation: "",
		img: Thumb3Img,
	},
	{
		id: safeRandomUUID(),
		rating: 4,
		title: "Hayalimizdeki Tasarımları Gerçeğe Dönüştürdüler",
		description:
			"Alugram ile markamın grafik tasarımlarını yaptırdım ve ortaya çıkan iş beni büyüledi! Ürün kataloglarımızdan marka kimliğimize kadar her şeyi baştan sona onlar tasarladı. Brand coordination ile o kadar uyumlu bir çalışma yaptılar ki, markam artık çok daha güçlü ve profesyonel bir görünüme kavuştu. Alugram’ın detaylara verdiği önem ve yaratıcı vizyonu, işlerinde ne kadar iyi olduklarını kanıtlıyor. Kesinlikle tekrar çalışacağım bir ekip",
		author: "",
		designation: "",
		img: Thumb4Img,
	},
];

function Testimonial() {
	return (
		<div className="section aximo-section-padding3">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						Müşterilerimiz her zaman
						<span className="aximo-title-animation">
							bizden memnundur
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
				<div className="row">
					{testimonialsData.map((testimonial, index) => (
						<FadeInStagger index={index} className="col-lg-6" key={testimonial.id}>
							<TestimonialCard testimonial={testimonial} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
