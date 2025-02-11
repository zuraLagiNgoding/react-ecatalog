import { Link, Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import { CornerDownLeft } from 'lucide-react';

const Layout = () => {
  const location = useLocation()

  return (
    <div className="w-full relative">
      <div className="fixed top-0 -z-10 size-full bg-white">
        <div className="fixed bottom-0 left-0 size-[700px] translate-x-[-50%] translate-y-[50%] rounded-full bg-[rgba(104,183,247,0.5)] opacity-50 blur-[80px]" />
      </div>
      <Navbar />
      {
        location.pathname.includes("category") &&
        <Link to={".."} className='w-fit absolute left-0 top-0 translate-y-40 translate-x-12 z-50 p-3 shadow-lg rounded-full'>
          <CornerDownLeft size={18}/>
        </Link>
      }
      <Outlet/>
    </div>
  );
}

export default Layout