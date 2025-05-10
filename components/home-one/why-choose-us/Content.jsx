import Image from "next/image";
import Star2Img from "./star2.png";

function Content() {
	return (
		<div className="aximo-default-content">
			<h2>
				<span className="aximo-title-animation">
					Yüksek kaliteli
					<span className="aximo-title-icon">
						<Image src={Star2Img} alt="Star2Img" />
					</span>
				</span>
				çalışma sürecimiz
			</h2>
			<p>
			Her aşamada müşteri ile etkili iletişim ve işbirliğine odaklanıyoruz ve nihai tasarımın müşterinin hedef ve beklentilerini karşılamasını sağlıyoruz.
			</p>
			<p>
			Bunların basitleştirilmiş adımlar olduğunu ve gerçek çalışma sürecinin projenin karmaşıklığına bağlı olarak değişebileceğini belirtmek önemlidir.
			</p>
		</div>
	);
}

export default Content;
