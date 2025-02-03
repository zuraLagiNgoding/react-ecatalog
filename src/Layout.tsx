import { Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

const Layout = () => {
  return (
    <div className="w-full relative">
      <div className="fixed top-0 -z-10 size-full bg-white">
        <div className="fixed bottom-0 left-0 size-[700px] translate-x-[-50%] translate-y-[50%] rounded-full bg-[rgba(104,183,247,0.5)] opacity-50 blur-[80px]" />
      </div>
      <Navbar />
      <Outlet/>
    </div>
  );
}

export default Layout