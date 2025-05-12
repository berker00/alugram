import Image from "next/image";
import QuestionImg from "../../public/images/icon/question.svg";
import Star2Img from "../../public/images/v1/star2.png";
const faqData = {
	faq1: [
		{
			id: crypto.randomUUID(),
			title: "Hangi hizmetleri sunuyorsunuz?",
			text: "Grafik tasarım, web tasarımı, marka kimliği, video prodüksiyon, ürün tasarımı ve özel tasarım hizmetleri gibi geniş bir yelpazede yaratıcı çözümler sunuyoruz. Ekibimiz, markanızın ihtiyaçlarına özel, yenilikçi ve etkili görsel içerikler üretme konusunda uzmanlaşmıştır. Her projeye, markanızın hikayesini en iyi şekilde anlatacak şekilde yaklaşıyoruz.",
		},
		{
			id: crypto.randomUUID(),
			title: "Tasarım süreciniz nasıl işliyor?",
			text: "Tasarım sürecimiz, sizin vizyonunuzu ve hedeflerinizi tam olarak anlamak için detaylı bir keşif aşamasıyla başlar. Ardından, konsept geliştirme, tasarım uygulama ve revizyon aşamalarına geçeriz. Her adımda, sizinle yakın iş birliği içinde çalışarak, projenin her aşamasında geri bildirimlerinizi alır ve tasarımın beklentilerinizi karşıladığından emin oluruz.",
		},
		{
			id: crypto.randomUUID(),
			title: "Hizmetlerinizin maliyeti nedir?",
			text: "Hizmetlerimizin maliyeti, projenin kapsamına, karmaşıklığına ve özel gereksinimlerinize bağlı olarak değişir. Her proje benzersizdir, bu nedenle standart bir fiyat listesi sunmak yerine, ihtiyaçlarınızı dinledikten sonra size özel bir teklif hazırlarız. Bu teklif, sunduğumuz kalite ve yaratıcılığı yansıtan, adil ve şeffaf bir fiyatlandırma içerir.",
		},
	],
	faq2: [
		{
			id: crypto.randomUUID(),
			title: "Önceki çalışmalarınızdan örnekler görebilir miyim?",
			text: "Elbette! Geçmişte tamamladığımız projelerden oluşan portföyümüzü web sitemizde bulabilirsiniz. Bu projeler, grafik tasarımdan video prodüksiyona, web tasarımından özel tasarım çözümlerine kadar uzanan geniş bir yelpazeyi kapsar. Portföyümüz, yaratıcılığımızı ve detaylara verdiğimiz önemi sergiler.",
		},
		{
			id: crypto.randomUUID(),
			title: "Tipik bir proje ne kadar sürer?",
			text: "Proje süreleri, projenin türüne ve kapsamına bağlı olarak değişiklik gösterir. Örneğin, basit bir logo tasarımı birkaç gün sürebilirken, kapsamlı bir web sitesi tasarımı veya video prodüksiyon projesi birkaç hafta sürebilir. İlk danışma aşamasında, projenizin gereksinimlerine göre net bir zaman çizelgesi sunarız.",
		},
		{
			id: crypto.randomUUID(),
			title: "Revizyonları ele alıyor musunuz? Kaç revizyon sunuyorsunuz?",
			text: "Evet, revizyonlar sürecimizin önemli bir parçasıdır. Genellikle, projenin gereksinimlerine bağlı olarak, tasarımın son halini alana kadar belirli sayıda revizyon turu sunarız. Bu, sizin geri bildirimlerinizi dikkate alarak, tasarımın tam olarak beklentilerinizi karşılamasını sağlar.",
		},
	],
};
function TwoColumnFaq() {
	return (
		<div className="section aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						Sıkça Sorulan Sorular
						<span className="aximo-title-animation">
							
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="Star" />
							</span>
						</span>
					</h2>
				</div>
				<div className="row">
					<div className="col-lg-6">
						<div className="aximo-accordion-normal-wrap responsive-margin">
							{faqData.faq1.map((faq) => (
								<div key={faq.id} className="aximo-accordion-normal-item">
									<div className="aximo-accordion-normal-icon">
										<Image src={QuestionImg} alt="QuestionImg" />
									</div>
									<div className="aximo-accordion-normal-data">
										<h3>{faq.title}</h3>
										<p>{faq.text}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="col-lg-6">
						<div className="aximo-accordion-normal-wrap">
							{faqData.faq2.map((faq) => (
								<div key={faq.id} className="aximo-accordion-normal-item">
									<div className="aximo-accordion-normal-icon">
										<Image src={QuestionImg} alt="QuestionImg" />
									</div>
									<div className="aximo-accordion-normal-data">
										<h3>{faq.title}</h3>
										<p>{faq.text}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TwoColumnFaq;
