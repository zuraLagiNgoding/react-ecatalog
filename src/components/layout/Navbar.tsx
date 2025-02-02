import { Heart, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky w-full top-0 left-0 px-[18rem] py-8 flex justify-between items-center bg-white shadow z-10">
      <h1 className="text-neutral-500 text-lg tracking-tight">
        Four <span className="text-blue-500 font-semibold">Catalog</span>
      </h1>
      <div className="w-1/2 flex items-center border border-neutral-300 rounded-lg shadow p-1.5 pl-5">
        <input type="text" className="w-full" placeholder="Cari produk.." />
        <div className="flex justify-center items-center border-l border-neutral-100 text-neutral-300 px-1.5">
          <Search size={18} />
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <div className="flex gap-4 items-center text-neutral-600">
          <div className="border border-neutral-300 rounded p-1.5">
            <Heart size={18} className="fill-current" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar