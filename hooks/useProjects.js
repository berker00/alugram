import Project1Img from "../public/images/v1/project1.png";
import Project2Img from "../public/images/v1/project2.png";
import Project3Img from "../public/images/v1/project3.png";
import Project4Img from "../public/images/v1/project4.png";
import Project5Img from "../public/images/v1/project5.png";
import Project6Img from "../public/images/v1/project6.png";
import Project1BigImg from "../public/images/v1/p_single1.png";
import Project2BigImg from "../public/images/v1/p_single2.png";
import Project3BigImg from "../public/images/v1/p_single3.png";
import Project4BigImg from "../public/images/v1/p_single4.png";
import Project5BigImg from "../public/images/v1/p_single5.png";
import Project6BigImg from "../public/images/v1/p_single6.png";
import { safeRandomUUID } from "@/utils/generateId";

// This is example data - you can replace it with your own data
export const projectsData = [
  {
    id: "project-1",
    title: "Graphic Design",
    description: "",
    img: Project6Img,
    bigimg:Project1BigImg,
    content: {
      fullDescription: "Günümüzün hızlı tempolu ve görsel odaklı dünyasında, grafik tasarım artık isteğe bağlı değil, zorunludur. Logodan broşüre, sosyal medya görselinden ambalaja kadar, markanızın mesajını, değerlerini ve kimliğini çarpıcı görsellerle iletmek sanatıdır. Etkili grafik tasarım olmadan, işletmeler kalabalık pazarda dikkat çekmekte ve öne çıkmakta zorlanır. Alugram olarak, markanızı yükseltmek ve hedef kitlenizle bağlantı kurmak için bu gücü kullanıyoruz.",
      steps: [
        {
          title: "Keşif",
          text: "Markanızı, hedeflerinizi ve hedef kitlenizi anlamakla başlıyoruz. Bu temel adım, tasarımlarımızın vizyonunuzla uyumlu olmasını sağlar",
        },
        {
          title: "Konsept Geliştirme",
          text: "Ekibimiz, markanıza özel yaratıcı yönleri keşfederek ilk fikirleri beyin fırtınası yapar ve çizer.",
        },
        {
          title: "Tasarım Uygulama",
          text: "Endüstri lideri araçlar kullanarak, her detaya odaklanarak görselleri hassasiyetle oluşturuyoruz.",
        },
        {
          title: "İşbirliği ve Revizyon",
          text: "Sizinle yakın çalışarak, geri bildirimlerinize dayanarak tasarımı mükemmelleştiriyoruz.",
        },
        {
          title: "Teslimat",
          text: "Son tasarımları, hemen kullanıma hazır tüm gerekli formatlarda sağlıyoruz.",
        },
      ]
    }
  },
  {
    id: "project-2",
    title: "Video Production",
    description: "",
    img: Project2Img,
    bigimg:Project2BigImg,
    content: {
      fullDescription: "Video tüketiminin ön planda olduğu günümüzde, yüksek kaliteli video prodüksiyonu markanızın hikayesini anlatmanın en etkili yoludur. [Şirket Adı] olarak, yeni nesil sosyal medya içerikleri, video montaj derlemeleri ve her türlü slideshow ile izleyicilerinizle güçlü bir bağ kurmanızı sağlıyoruz. En son video düzenleme teknolojilerini kullanarak, markanızı modern bir şekilde öne çıkarıyoruz.",
      steps: [
        {
          title: "Ön Prodüksiyon",
          text: "Hedeflerinizle uyumlu bir senaryo ve storyboard geliştirmek için işbirliği yapıyoruz.",
        },
        {
          title: "Prodüksiyon",
          text: "Profesyonel ekipmanlar kullanarak çarpıcı görseller ve net sesler yakalıyoruz.",
        },
        {
          title: "Post Prodüksiyon",
          text: "Kurgu, efektler ve ses düzenlemeleriyle videoyu cilalayarak son haline getiriyoruz.",
        },
        {
          title: "İnceleme",
          text: "Geri bildirimlerinizi alarak videonun beklentilerinizi karşıladığından emin oluyoruz.",
        },
        {
          title: "Teslimat",
          text: " Son videoyu tercih ettiğiniz formatlarda sunuyoruz.",
        },
      ]
    }
  },
  {
    id: "project-3",
    title: "WEB Site Design",
    description: "",
    img: Project1Img,
    bigimg:Project3BigImg,
    content: {
      fullDescription: "Dijital çağda, web siteniz işinizin dünyaya açılan yüzüdür. İyi tasarlanmış bir site, görsel olarak çekici, fonksiyonel ve kullanıcı dostu olmalıdır.Web siteniz, markanızın dijital dünyadaki yüzüdür. Yazılım sektörü hızla gelişiyor ve eski, basit web siteleri artık yeterli olmuyor. Alugram olarak, en gelişmiş yazılım dilleriyle markanıza uyumlu, modern ve şık web siteleri tasarlıyoruz. Aynı zamanda, sitenizi kolayca yönetebilmeniz için bir yönetici paneli sunuyoruz. Size en yaratıcı ve işlevsel web sitesini hazırlayarak markanızı öne çıkarıyoruz",
      steps: [
        {
          title: "Planlama",
          text: "Hedeflerinizi ve izleyici ihtiyaçlarınızı değerlendiririz.",
        },
        {
          title: "Tasarım",
          text: "Onay için tel çerçeveler ve mockup'lar oluştururuz.",
        },
        {
          title: "Geliştirme",
          text: "En iyi uygulamalarla siteyi inşa ederiz.",
        },
        {
          title: "Test",
          text: "Tüm cihazlarda kusursuz performans sağlarız.",
        },
        {
          title: "Lansman",
          text: "Tamamen işlevsel bir web sitesi sunarız.",
        },
      ]
    }
  },
  {
    id: "project-4",
    title: "Custom Design",
    description: "",
    img: Project5Img,
    bigimg:Project4BigImg,
    content: {
      fullDescription: "Standart seçenekler yetersiz kaldığında, özel tasarım tam olarak ihtiyacınız olanı sunar. Özel tasarım, tüm hizmetlerimizin harmanlandığı bir kategoridir ve size tamamen kişiselleştirilmiş çözümler sunar. Video logo tasarımlarından özel isteklerinize kadar her fikri hayata geçiriyoruz. Alugram olarak, ne isterseniz bize anlatın; biz onu sizin için tasarlayalım, her formatta sunalım ve tam istediğiniz şekilde hayata geçirelim.",
      steps: [
        {
          title: "Danışmanlık",
          text: "Gereksinimlerinizi ve hedeflerinizi tanımlarız.",
        },
        {
          title: "Konsept Geliştirme",
          text: "Özel tasarım önerileri oluştururuz.",
        },
        {
          title: "İyileştirme",
          text: "Geri bildirimlerinize dayanarak ayarlamalar yaparız.",
        },
        {
          title: "Uygulama",
          text: "Özel çözümü özenle üretiriz.",
        },
        {
          title: "Teslimat",
          text: "Son ürünü spesifikasyonlarınıza göre sunarız.",
        },
      ]
    }
  },
  {
    id: "project-5",
    title: "Brand Coordination",
    description: "",
    img: Project3Img,
    bigimg:Project5BigImg,
    content: {
      fullDescription: "Birleşik bir marka kimliği, tanınma ve güven için hayati öneme sahiptir. Marka koordinasyonu, logolardan ambalajlara, mesajlardan görsellere kadar her temas noktasının tutarlı bir hikaye anlatmasını sağlar. Markanızın sosyal medyadaki varlığı, günümüz dünyasında vazgeçilmez bir gerekliliktir. Sosyal medya olmadan markalar rekabette ayakta kalamaz; bu, markanız için bir zorunluluktur. Alugram olarak, renk tonlarından logonuza kadar her detayı titizlikle ele alıyor, markanızı güvenilir ve ön planda bir imajla buluşturuyoruz.",
      steps: [
        {
          title: "Analiz",
          text: "Markanızın değerlerini, misyonunu ve hedef kitlesini inceliyoruz.",
        },
        {
          title: "Yönerge Oluşturma",
          text: "Görseller ve ton için kapsamlı marka yönergeleri geliştiriyoruz..",
        },
        {
          title: "Uygulama",
          text: "Bu standartları tüm varlıklarınızda uyguluyoruz.",
        },
        {
          title: "İnceleme",
          text: "Geri bildirimlerinizle tutarlılığı sağlıyoruz.",
        },
        {
          title: "Destek",
          text: " Marka uyumunu sürdürmek için sürekli rehberlik sunuyoruz.",
        },
      ]
    }
  },
  {
    id: "project-6",
    title: "Product Design",
    description: "",
    img: Project4Img,
    bigimg:Project6BigImg,
    content: {
      fullDescription: "Harika ürün tasarımı, fikirleri kullanıcıların sevdiği çözümlere dönüştürür, ister fiziksel bir ürün ister dijital bir arayüz olsun. Çağımızda ürün tasarımı, bir ürünün başarısını belirleyen en önemli unsurlardan biridir. İnsanlar artık tasarıma büyük önem veriyor; çekici ve işlevsel bir tasarım, ürünü al beni dedirtecek hale getirir ve markanızı yükseltir. Alugram olarak, ürünlerinize harika mockup’lar ve etkili tasarım yeteneklerimizle ön plana çıkan dizaynlar sunuyoruz.",
      steps: [
        {
          title: "Araştırma",
          text: "Kullanıcılarınızın ihtiyaçlarını ve zorluklarını inceliyoruz.",
        },
        {
          title: "Fikir Geliştirme",
          text: "Potansiyel çözümler için beyin fırtınası yapar ve çizeriz.",
        },
        {
          title: "Prototipleme",
          text: "Kullanılabilirlik için prototipler oluşturur ve test ederiz.",
        },
        {
          title: "İyileştirme",
          text: "Geri bildirim ve testlere dayanarak iterasyon yaparız.",
        },
        {
          title: "Sonlandırma",
          text: "Lansmana hazır bir ürün tasarımı sunarız.",
        },
      ]
    }
  },
];

export function useProjects() {
  return { projects: projectsData };
}

export function useProjectById(id) {
  const project = projectsData.find(p => p.id === id);
  return { project };
}