# Alugram 

Alugram, Next.js ile geliştirilmiş modern ve responsive bir web sitesi projesidir. Şık tasarımı ve kullanıcı dostu arayüzüyle öne çıkan bu proje, şirket ya da ajans tanıtımları için ideal bir çözüm sunar.

## Teknolojiler

Bu projede kullanılan temel teknolojiler:

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - JavaScript kütüphanesi
- [Bootstrap](https://getbootstrap.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animasyon kütüphanesi
- [Swiper](https://swiperjs.com/) - Modern slider kütüphanesi

## Kurulum

Projeyi yerel geliştirme ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

### Gereksinimleri

- Node.js (14.x veya üzeri)
- npm veya yarn

### Adımlar

1. Projeyi klonlayın:
```bash
git clone https://github.com/berker00/alugram.git
cd alugram
```

2. Bağımlılıkları yükleyin:
```bash
npm install
# ya da
yarn install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
# ya da
yarn dev
```

4. Tarayıcınızı açın ve [http://localhost:3000](http://localhost:3000) adresini ziyaret edin.

## Derleme ve Canlı Ortam

Projeyi canlı ortama yüklemek için:

1. Üretim derlemesini oluşturun:
```bash
npm run build
# ya da
yarn build
```

2. Üretim sunucusunu başlatın:
```bash
npm start
# ya da
yarn start
```

## PM2 ile Canlı Ortam Yayını

PM2 kullanarak projeyi sunucuda sürekli çalışır halde tutabilirsiniz:

1. Önce PM2'yi global olarak yükleyin:
```bash
npm install -g pm2
```

2. Üretim derlemesini oluşturun:
```bash
npm run build
```

3. PM2 ile projeyi başlatın:
```bash
pm2 start npm --name "alugram" -- start
```

4. Veya development modunda çalıştırmak için:
```bash
pm2 start npm --name "alugram-dev" -- run dev
```

5. PM2 durumunu kontrol edin:
```bash
pm2 list
```

6. Log kayıtlarını görüntüleyin:
```bash
pm2 logs alugram
```

## PM2 Yapılandırma Dosyası

Alternatif olarak, bir PM2 ecosystem dosyası kullanabilirsiniz:

`ecosystem.config.js` dosyasını proje ana dizinine ekleyin:

```javascript
module.exports = {
  apps: [
    {
      name: 'alugram',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}
```

Ve şu şekilde başlatın:
```bash
pm2 start ecosystem.config.js
```

## Özellikler

- Responsive tasarım
- Animasyonlu geçişler
- Modern UI bileşenleri
- SEO dostu yapı
- Kolay özelleştirilebilir içerik

## Lisans

Bu proje [AtlasPRO+](LICENSE) altında lisanslanmıştır.

---

Atlas Yazılım tarafından ❤️ ile oluşturulmuştur. 
