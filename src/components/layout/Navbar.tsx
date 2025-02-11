import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky w-full top-0 left-0 px-[18rem] py-8 items-center bg-white shadow z-10">
      <Link to='/' className='flex gap-3 cursor-pointer'>
        <div className="flex gap-4 items-center text-neutral-600">
          <div className="border border-neutral-300 rounded p-1.5">
            <ShoppingCart size={18} className="fill-current text-blue-500" />
          </div>
        </div>
        <h1 className="text-neutral-500 text-lg tracking-tight">
          Four <span className="text-blue-500 font-semibold">Catalog</span>
        </h1>
      </Link>
    </nav>
  );
}

export default Navbar