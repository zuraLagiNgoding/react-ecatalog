import product1 from "../assets/products/product-1.png";
import product2 from "../assets/products/product-2.png";
import product3 from "../assets/products/product-3.png";
import product4 from "../assets/products/product-4.jpeg";
import product6 from "../assets/products/product-6.jpeg";
import gamepad from "../assets/products/activity-control-cable-relaxation-station.jpg";
import website from "../assets/products/Website App.jpg";
import mobile from "../assets/products/Mobile App.png";
import iot from "../assets/products/Arduino.jpg";

interface Products {
  name: string;
  description: string;
  url: string;
  wide: boolean;
  price: number;
}

export const featuredProduct = [
  {
    name: "Game",
    description: "Lorem ipsum dolor sit amet.",
    url: gamepad,
    wide: false,
  },
  {
    name: "Website App",
    description: "Lorem ipsum dolor sit amet.",
    url: website,
    wide: false,
  },
  {
    name: "Design",
    description: "Lorem ipsum dolor sit amet.",
    url: product6,
    wide: true,
  },
  {
    name: "Mobile App",
    description: "Lorem ipsum dolor sit amet.",
    url: mobile,
    wide: false,
  },
  {
    name: "Internet of Things",
    description: "Lorem ipsum dolor sit amet.",
    url: iot,
    wide: false,
  },
];

export const products: Products[] = [
  {
    name: "Luxury Watch",
    description: "Elegant timepiece with modern design",
    url: product1,
    wide: false,
    price: 85000,
  },
  {
    name: "Smart Speaker",
    description: "Advanced audio technology",
    url: product2,
    wide: false,
    price: 65000,
  },
  {
    name: "Pro Gaming Headset",
    description: "Immersive sound for gamers",
    url: product3,
    wide: true,
    price: 120000,
  },
  {
    name: "Wireless Earbuds",
    description: "Crystal clear sound, compact design",
    url: product4,
    wide: false,
    price: 55000,
  },
];