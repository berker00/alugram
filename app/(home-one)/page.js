import About from "@/components/home-one/about";
import AutoSlider from "@/components/home-one/auto-slider";
import Hero from "@/components/home-one/hero";
import Projects from "@/components/home-one/projects";
import Services from "@/components/home-one/services";
import Teams from "@/components/home-one/teams";
import Testimonial from "@/components/home-one/testimonial";
import WhyChooseUs from "@/components/home-one/why-choose-us";

// Teams images
import Team1Img from "@/public/images/team/team1.png";
import Team2Img from "@/public/images/team/team2.png";
import Team3Img from "@/public/images/team/team3.png";
import Team4Img from "@/public/images/team/team4.png";


// Helper function to generate simple IDs
const generateId = () => Math.random().toString(36).substring(2, 9);

const servicesData = [
	{
		id: generateId(),
		title: "WEB Site Design",
		description:
			"Web sitenizi tasarlamak için profesyonel bir ekip ile çalışıyoruz. İhtiyaçlarınıza uygun tasarımlar sunuyoruz.",
		icon: "icon-launch",
	},
	{
		id: generateId(),
		title: "Product Design",
		description:
			"Ürünlerinizi etkileyici tasarımlarla öne çıkarıyor, 3D modellerle sunuyor ve baskıya hazır şekilde teslim ediyoruz.",
		icon: "icon-layers",
	},
	{
		id: generateId(),
		title: "Graphic Design",
		description:
			"Kurumsal kimlikten sosyal medyaya, kataloglardan bannerlara <strong>HER ALANDA</strong> çarpıcı grafik çözümleri sunuyoruz",
		icon: "icon-content-writing",
	},
	{
		id: generateId(),
		title: "Video Production",
		description:
			"Montaj, kurgu ve içerik üretimiyle her platform için profesyonel videolar yaratıyoruz.",
		icon: "icon-flame",
	},
	{
		id: generateId(),
		title: "Brand Coordination",
		description:
			"Reklam, tabela, web tasarımı, ürün çekimi ve daha fazlasını çözüm ortaklarımızla kusursuzca koordine ediyoruz.",
		icon: "icon-project-management",
	},
	{
		id: generateId(),
		title: "Custom Design",
		description:
			"Hayallerinizi gerçeğe dönüştürüyoruz. Taleplerinize özel fikirler geliştiriyor ve tamamen size özgü tasarımlar sunuyoruz.",
		icon: "icon-target",
	},
];
const teamsData = [
	{
		id: generateId(),
		name: "Atlas Software",
		designation: "",
		img: Team1Img,
	},
	{
		id: generateId(),
		name: "Çakır Holding",
		designation: "",
		img: Team2Img,
	},
	{
		id: generateId(),
		name: "OBAL Aluminium",
		designation: "",
		img: Team3Img,
	},
	{
		id: generateId(),
		name: "Alustar",
		designation: "",
		img: Team4Img,
	},
	{
		id: generateId(),
		name: "Alufour",
		designation: "",
		img: Team4Img,
	},
	{
		id: generateId(),
		name: "Alusoft",
		designation: "",
		img: Team4Img,
	},
	{
		id: generateId(),
		name: "Çakıray Yapı",
		designation: "",
		img: Team4Img,
	},
	{
		id: generateId(),
		name: "Çakır Lojistik",
		designation: "",
		img: Team4Img,
	},
	{
		id: generateId(),
		name: "Alumaster",
		designation: "",
		img: Team4Img,
	},
	{
		id: generateId(),
		name: "ÇakırGY",
		designation: "",
		img: Team4Img,
	},
	{
		id: generateId(),
		name: "Fillab",
		designation: "",
		img: Team4Img,
	},
	{
		id: generateId(),
		name: "Filates",
		designation: "",
		img: Team4Img,
	},

	
];
export default function HomeOne() {
	return (
		<>
			<Hero />
			<Services services={servicesData} />
			<About />
			<Projects />
			<WhyChooseUs />
			<Testimonial />
			<AutoSlider />
			<Teams teams={teamsData} />
		</>
	);
}
