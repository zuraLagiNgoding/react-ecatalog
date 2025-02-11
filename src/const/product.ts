import product6 from "../assets/products/product-6.jpeg";
import gamepad from "../assets/products/activity-control-cable-relaxation-station.jpg";
import website from "../assets/products/Website App.jpg";
import mobile from "../assets/products/Mobile App.png";
import iot from "../assets/products/Arduino.jpg";

import p1 from "../assets/products/1.png";
import p2 from "../assets/products/2.png";
import p3 from "../assets/products/3.png";
import p4 from "../assets/products/4.png";
import p5 from "../assets/products/5.png";
import p6 from "../assets/products/6.png";
import p7 from "../assets/products/7.png";
import p8 from "../assets/products/8.png";
import p9 from "../assets/products/9.png";
import p10 from "../assets/products/10.png";
import p11 from "../assets/products/11.png";
import p12 from "../assets/products/12.webp";
import p13 from "../assets/products/13.webp";
import p14 from "../assets/products/14.webp";
import p15 from "../assets/products/15.webp";
import p16 from "../assets/products/16.webp";
import p17 from "../assets/products/17.png";
import p18 from "../assets/products/18.png";

import pd1 from "../assets/products/detail/1.png";
import pd2 from "../assets/products/detail/2.png";
import pd3 from "../assets/products/detail/3.png";
import pd4 from "../assets/products/detail/4.png";
import pd5 from "../assets/products/detail/5.png";
import pd6 from "../assets/products/detail/6.png";
import pd7 from "../assets/products/detail/7.png";
import pd8 from "../assets/products/detail/8.png";
import pd9 from "../assets/products/detail/9.png";
import pd10 from "../assets/products/detail/10.png";
import pd11 from "../assets/products/detail/11.png";
import pd14 from "../assets/products/detail/14.png";
import pd15 from "../assets/products/detail/15.png";
import pd16 from "../assets/products/detail/16.png";
import pd17 from "../assets/products/detail/17.png";
import pd18 from "../assets/products/detail/18.png";
import pd19 from "../assets/products/detail/19.png";
import pd20 from "../assets/products/detail/20.png";

export const featuredProduct = [
  {
    name: "Game",
    description: "Lorem ipsum dolor sit amet.",
    image: gamepad,
    wide: false,
    url: "game",
  },
  {
    name: "Website",
    description: "Lorem ipsum dolor sit amet.",
    image: website,
    wide: false,
    url: "website-app",
  },
  {
    name: "Desain",
    description: "Lorem ipsum dolor sit amet.",
    image: product6,
    wide: true,
    url: "desain",
  },
  {
    name: "Mobile App",
    description: "Lorem ipsum dolor sit amet.",
    image: mobile,
    wide: false,
    url: "mobile-app",
  },
  {
    name: "Internet of Things",
    description: "Lorem ipsum dolor sit amet.",
    image: iot,
    wide: false,
    url: "internet-of-things",
  },
];

export const products = [
  {
    name: "PlayLynk",
    description:
      "PlayLynk adalah pemutar musik web yang memungkinkan pengguna mengunggah dan memutar file MP3 dari penyimpanan lokal. Aplikasi ini dirancang sebagai prototipe sederhana yang mensimulasikan fitur dasar platform musik modern.",
    detail: pd1,
    category: "Website",
    categoryURL: "website-app",
    url: p1,
    wide: false,
  },
  {
    name: "Cashier App",
    description:
      "RPL Cashier adalah sebuah sistem pengelolaan penjualan yang berbasis web. Fitur utama di aplikasi ini meliputi penambahan data produk, mendownload barcode produk, mengambil data produk menggunakan scanner, mencetak struk dari data produk yang diambil.",
    detail: pd2,
    category: "Website",
    categoryURL: "website-app",
    url: p2,
    wide: false,
  },
  {
    name: "ProSync",
    description:
      "ProSync adalah aplikasi manajemen tugas, aplikasi ini dirancang untuk mengatur alur kerja tim, memberikan tugas kepada tim, dan meningkatkan produktivitas.",
    detail: pd3,
    category: "Website",
    categoryURL: "website-app",
    url: p3,
    wide: true,
    price: 120000,
  },
  {
    name: "Cekin.GU",
    description:
      "CEKIN.GU adalah sistem pemantauan kegiatan guru yang dirancang untuk memudahkan pengelolaan dan pemantauan kegiatan belajar mengajar. Sistem ini berbasis web dan memiliki tujuan utama untuk memberikan platform digital bagi para guru dalam mengelola kegiatan secara efisien.",
    detail: pd4,
    category: "Website",
    categoryURL: "website-app",
    url: p4,
    wide: false,
    price: 55000,
  },
  {
    name: "Alumni Tracer",
    description:
      "Alumni Tracer adalah aplikasi yang digunakan untuk melacak dan mengelola data alumni. Alumni bisa mengisi formulir dua kali sehari, sementara admin dapat mengakses data lengkap, logs, statistik, serta menambahkan dan mengekspor data alumni.",
    detail: pd5,
    category: "Website",
    categoryURL: "website-app",
    url: p5,
    wide: false,
    price: 55000,
  },
  {
    name: "Raporku",
    description:
      "Raporku adalah aplikasi web yang dirancang untuk mempermudah pengelolaan nilai dan data siswa. Aplikasi ini membuat siswa untuk memasukkan nilai ujian mereka, sementara guru dapat mengelola dan memantau perkembangan nilai siswa selama 6 semester.",
    detail: pd6,
    category: "Website",
    categoryURL: "website-app",
    url: p6,
    wide: false,
    price: 55000,
  },
  {
    name: "GudangKita.",
    description:
      "GudangKIta adalah aplikasi web berbasis Laravel yang dirancang untuk membantu pengelolaan inventaris barang dengan lebih efisien, akurat, dan mudah diakses dari mana saja.",
    detail: pd7,
    category: "Website",
    categoryURL: "website-app",
    url: p7,
    wide: false,
    price: 55000,
  },
  {
    name: "To-do List",
    description:
      "To-Do List adalah aplikasi sederhana untuk mencatat, mengatur, dan menyelesaikan tugas dengan mudah. Fitur utama meliputi tambah tugas, tandai selesai, & hapus, serta tampilan yang user friendly. Cocok untuk meningkatkan produktivitas dengan cara yang praktis!",
    detail: pd8,
    category: "Mobile App",
    categoryURL: "mobile-app",
    url: p8,
    wide: false,
    price: 55000,
  },
  {
    name: "CNPLUS PARKIR",
    description:
      "Aplikasi parkir pintar yang memudahkan pencarian, pemesanan, dan manajemen parkir secara real-time. Dengan fitur login, pengguna dapat menyimpan riwayat parkir dan informasi pribadi untuk pengalaman lebih praktis.",
    detail: pd9,
    category: "Mobile App",
    categoryURL: "mobile-app",
    url: p9,
    wide: false,
    price: 55000,
  },
  {
    name: "Notepad",
    description:
      "Notepad adalah aplikasi sederhana untuk mencatat, dan menyelesaikan tugas dengan mudah. Fitur utama meliputi tambah tugas, tandai selesai, & hapus.",
    detail: pd10,
    category: "Mobile App",
    categoryURL: "mobile-app",
    url: p10,
    wide: false,
    price: 55000,
  },
  {
    name: "Roblox Driving Simulator",
    description:
      "Roblox Driving Simulator adalah sebuah game open-world di platform Roblox yang berfokus pada balapan, eksplorasi, dan mengendarai berbagai jenis mobil dalam lingkungan dunia terbuka yang luas.",
    detail: pd11,
    category: "Game",
    categoryURL: "game",
    url: p11,
    wide: false,
    price: 55000,
  },
  {
    name: "Smart Lamp",
    description:
      "Proyek ini menggunakan ESP32 sebagai mikrokontroler utama yang terhubung ke bot Telegram untuk mengendalikan lampu secara jarak jauh. Sistem ini memanfaatkan relay 5V dual channel untuk mengontrol daya ke lampu.",
    detail: pd15,
    category: "Internet of Things",
    categoryURL: "internet-of-things",
    url: p12,
    wide: false,
    price: 55000,
  },
  {
    name: "Running Text",
    description:
      "Running text dengan Arduino adalah tampilan teks berjalan yang dapat dikendalikan menggunakan mikrokontroler Arduino. Umumnya, running text ini menggunakan modul LED matrix, untuk menampilkan karakter yang bergerak dari kanan ke kiri atau sesuai pengaturan lainnya.",
    detail: pd16,
    category: "Internet of Things",
    categoryURL: "internet-of-things",
    url: p13,
    wide: false,
    price: 55000,
  },
  {
    name: "Absensi Berbasis RFID",
    description:
      "Sistem ini menggunakan Arduino dan sensor RFID untuk membaca UID kartu NFC, lalu mengirimnya ke server database melalui WiFi atau kabel. Server memverifikasi UID, mencatat waktu scan dan status kehadiran jika valid. Arduino memberikan umpan balik dengan LED atau buzzer sesuai hasil verifikasi.",
    detail: pd17,
    category: "Internet of Things",
    categoryURL: "internet-of-things",
    url: p14,
    wide: false,
    price: 55000,
  },
  {
    name: "RFID Door Lock",
    description:
      "Sistem pengunci pintu berbasis Arduino yang menggunakan teknologi RFID (Radio Frequency Identification) untuk mengontrol akses masuk. Sistem ini bekerja dengan cara membaca kartu atau tag RFID yang telah terdaftar, kemudian membandingkannya dengan database yang tersimpan dalam mikrokontroler.",
    detail: pd18,
    category: "Internet of Things",
    categoryURL: "internet-of-things",
    url: p16,
    wide: false,
    price: 55000,
  },
  {
    name: "SmartLock PIN",
    description:
      "SmartLock Arduino adalah sistem kunci pintu otomatis berbasis Arduino yang menggunakan keypad sebagai metode akses utama. Saat pengguna memasukkan kode PIN yang benar, sistem akan mengaktifkan servo untuk membuka kunci pintu. Jika kode yang dimasukkan salah, buzzer akan berbunyi sebagai tanda peringatan.",
    detail: pd19,
    category: "Internet of Things",
    categoryURL: "internet-of-things",
    url: p17,
    wide: false,
    price: 55000,
  },
  {
    name: "Miniatur Lampu Lalu Lintas",
    description:
      "Proyek ini merupakan miniatur sistem lampu lalu lintas yang menggunakan mikrokontroler Arduino sebagai pengontrol utama. Lampu lalu lintas ini bekerja berdasarkan sistem delay waktu, yang berarti setiap warna lampu (merah, kuning, dan hijau) menyala dalam interval waktu tertentu secara otomatis.",
    detail: pd14,
    category: "Internet of Things",
    categoryURL: "internet-of-things",
    url: p15,
    wide: false,
    price: 55000,
  },
  {
    name: "Desain Grafis",
    description:
      "Desain grafis adalah proses komunikasi visual yang menggunakan gambar, tulisan, bentuk, dan elemen visual lainnya untuk menyampaikan pesan. Desain grafis dapat digunakan untuk berbagai tujuan, seperti komersial, sosial, atau pribadi.",
    detail: pd20,
    category: "Desain",
    categoryURL: "desain",
    url: p18,
    wide: false,
    price: 55000,
  },
];