# Twitter X Clone

Twitter X projesi ile dilediğiniz içerikleri paylaşabilirsiniz. <br />
Kendi paylaşımlarınızı düzenleyebilir, silebilir veya beğenebilirsiniz. <br />
Kaydolarak veya Google hesabı seçeneği ile sisteme giriş yapabilirsiniz. <br />

React vite kullanıldı.<br />
Tailwindcss ile responsive sayfalar oluşturuldu.<br />
Toastify ile kullanıcılar işlem yaptıktan sonra bilgi mesajı alır. <br />
Firebase ile Kullanıcı Doğrulama İşlemleri yapıldı.<br />
Veritabanı ve resim depolama alanı oluşturuldu. <br />
Bu sayede projenin performansı artmış oldu. <br />

## Gif

![](/public/twitter.gif)

## Projenin Çalıştırılması

Projeyi indiriniz veya fork ediniz. 'Visual Studio Code' editörü ile projeyi açınız.

```
git clone https://github.com/evinoguz/twitter-x-clone.git
```

Proje dizininde .env adında dosya oluşturunuz. Bu dosyada ortam değişkenlerini tanımlayınız.<br />
Bu ayarları yapmak için [Firebase](https://console.firebase.google.com/u/0/) dokümanından faydalanabilirsiniz. <br />
Buradan yeni proje oluşturunuz.<br />
goto console > proje adı twitter-app > continue > enabled pasif yap >
Web> nickname(ismi önemli değil) twitter-app > Register App <br />
Daha sonra "Firebase configuration" değişkenlerinizin değerini çift tırnak olmadan belirtiniz.

```
VITE_API_KEY = yourApiKey
VITE_AUTH_DOMAIN = yourAuthDomain
VITE_PROJECT_ID = yourProjectId
VITE_STORAGE_BUCKET = yourStorageBucket
VITE_MESSAGING_SENDER_ID = yourMessagingSenderId
VITE_APP_ID = yourAppId
```

Veritabanınızı oluşturunuz. <br />
firebase>proje>build>firestore database >create database> eur3 (Europe) seç > Start in production mode

Resim video gibi medya içeriklerini depolamak için Storage oluşturunuz. <br />
Build>Storage>Get started> Production Mode(standart)>eur3(standart) > Rules> if true yapınız.<br />

Google ile kullanıcı doğrulama işlemini aktifleştiriniz.<br />
firebase sol menüde > Build> Authentication > Get Started> Email/Password> Enabled butonunu aktif et > Save
Google > Enabled butonunu aktif et > Email seç > Save <br />

Epostaya, Şifre Sıfırlama Mesajı gönderirken mesaj varsayılan olarak ingilizce metin içermektedir. <br />
Bunu düzenlemek için Authentication> Templates> Password Reset tıklayıp içerik düzenlenebilir.

Terminalde;

```
npm install

```

komutu ile projede kullanılan paketlerin yüklenmesini sağlar, ardından

```
npm run dev
```

komutu ile proje ayağa kaldırılır.
