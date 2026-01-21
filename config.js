/* config.template.js - FILE TEMPLATE
   App Electron sẽ replace 
*/
const WEDDING_CONFIG = {
  groomName: "Tuấn Anh",
  brideName: "Thanh Hoa",

  weddingDate: "2026-02-25 17:00",
  location: "Minh Dương Palace - 98 P. Hồng Đô, Mễ Trì, Nam Từ Liêm, Hà Nội",

  // link mở ngoài (mở app Google Maps trên điện thoại)
  mapUrl: "https://maps.app.goo.gl/6CgShG4hDuc3jaUaA",

  // link embed hiển thị trực tiếp trong trang
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5223.005478336541!2d105.7646456!3d21.013346500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134538022725b2b%3A0x89e7c8392bd57d6c!2zTWluaCBExrDGoW5nIFBhbGFjZQ!5e1!3m2!1svi!2s!4v1769005301225!5m2!1svi!2s",

  heroImage: "assets/hero.jpg",
  doorLeft: "assets/A.png",
  doorRight: "assets/B.png",

  music: "assets/Music.mp3",

  effectImage: "assets/effect.png",
  effectEnabled: true,

  videoUrl: "https://www.youtube.com/embed/n7mIjBvzFsQ",

  gallery: [
    { src: "assets/g1.jpg" },
    { src: "assets/g2.jpg" },
    { src: "assets/g3.jpg" },
    { src: "assets/g4.jpg" },
    { src: "assets/g5.jpg" },
    { src: "assets/g6.jpg" },
    { src: "assets/g7.jpg" },
    { src: "assets/g8.jpg" },
    { src: "assets/g9.jpg" },
    { src: "assets/g10.jpg" }
  ],

  invitation: {
    groomSide: {
      avatar: "assets/g1.jpg",
      name: "Tuấn Anh",
      parents: "Bố: Vương Tiến Vũ<br>Mẹ: Đoàn Thị Vân",
      address: "Địa chỉ: Số 7 ngách 52/25 Mỹ Đình-Từ Liêm-Hà Nội"
    },
    brideSide: {
      avatar: "assets/g2.jpg",
      name: "Thanh Hoa",
      parents: "Bố: Bùi Minh Phương<br>Mẹ: Phạm Thị Nhu",
      address: "Địa chỉ: số 62 Tây Phú- Khánh Thiện- Yên Khánh- Ninh Bình"
    }
  },

  qr: [
    {
      src: "assets/QR01.jpg",
      title: "BUI THI THANH HOA",
      info: "Xin chân thành cảm ơn",
    },
  ]
};
