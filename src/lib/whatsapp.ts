const WHATSAPP_NUMBER = "6285158758688";

export const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const whatsappMessages = {
  nav: "Halo BimbinganYuk, saya mau cek kondisi skripsi saya dulu. Saat ini saya sedang butuh arahan.",
  hero: "Halo BimbinganYuk, saya mau cek kondisi skripsi gratis. Kondisi saya sekarang...",
  footer: "Halo BimbinganYuk, saya mau tanya dulu tentang pendampingan skripsi yang cocok untuk kondisi saya.",
  floating: "Halo BimbinganYuk, saya mau cek revisi/kondisi skripsi saya gratis.",
  affiliate: "Halo BimbinganYuk, saya mau daftar jadi affiliate/referral partner. Saya ingin tahu cara kerja komisi 10%.",
  package: (packageName: string) =>
    `Halo BimbinganYuk, saya tertarik konsultasi untuk ${packageName}. Saya ingin tahu apakah paket ini cocok untuk kondisi skripsi saya.`,
};
