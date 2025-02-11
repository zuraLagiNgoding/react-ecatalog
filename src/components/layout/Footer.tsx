import smkn4 from "../../assets/logo-smkn4.png";
import fourfair from "../../assets/logo-fourfair.webp";

const Footer = () => {
  return (
    <footer className="w-full px-20 py-2 flex items-center justify-end mt-2 bg-sky-600 gap-4">
      <img src={smkn4} alt="smkn4" className="w-[3.5rem]"/>
      <img src={fourfair} alt="fourfair" className="w-[12rem]" />
    </footer>
  );
}

export default Footer