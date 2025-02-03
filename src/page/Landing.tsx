import { AlignJustify, Heart } from "lucide-react";
import clsx from "clsx";
import { featuredProduct, products } from "../const/product";
import HeroSlider from "../components/HeroSlider";
import { sliders } from "../const/slider";

function Landing() {
  return (
    <>
      <div className="px-[18rem] py-8 h-[calc(100vh*0.6)] grid grid-cols-10 gap-12 overflow-hidden">
        <ul className="col-span-2 border border-neutral-300 rounded-lg text-sm h-fit hidden">
          <li className="flex items-center gap-3 px-5 py-5 border-b border-neutral-300">
            <AlignJustify size={18} />
            <p className="font-medium">Kategori</p>
          </li>
          <li className="flex px-5 py-4 border-b border-neutral-300">
            <p>Desain</p>
          </li>
          <li className="flex px-5 py-4 border-b border-neutral-300">
            <p>Website App</p>
          </li>
          <li className="flex px-5 py-4 border-b border-neutral-300">
            <p>Mobile App</p>
          </li>
          <li className="flex px-5 py-4 border-b border-neutral-300">
            <p>Game</p>
          </li>
          <li className="flex px-5 py-4 border-b border-neutral-300">
            <p>Internet of Things</p>
          </li>
        </ul>
        <HeroSlider sliders={sliders} />
      </div>
      <div className="px-[18rem] py-8 space-y-6">
        <h2 className="text-xl font-semibold">Produk Pilihan</h2>
        <hr className="text-neutral-300" />
        <div className="grid grid-cols-5 gap-8">
          {featuredProduct.map((product, index) => {
            if (index === 0) {
              return (
                <div
                  key={index}
                  className="col-span-2 row-span-2 bg-gray-200 rounded-lg p-8 bg-cover shadow-xl"
                  style={{
                    backgroundImage: `url(${product.url})`,
                  }}
                >
                  <div className="flex flex-col h-full">
                    <div className="mt-4">
                      <p className="text-2xl font-semibold">{product.name}</p>
                      <p className="text-gray-600">{product.description}</p>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  key={index}
                  className={clsx(
                    "flex flex-col relative bg-cover bg-center rounded-lg p-4 hover:scale-105 transition shadow-lg",
                    product.wide ? "col-span-2" : "col-span-1",
                    "h-[16rem]"
                  )}
                  style={{
                    backgroundImage: `url(${product.url})`,
                  }}
                >
                  {/* <div className="absolute top-3 right-3">
                    <p className="text-sm font-medium bg-neutral-800 text-white w-fit px-3 py-1.5 rounded-full">
                      Rp{product.price.toLocaleString("id")}
                    </p>
                  </div> */}
                  <div className="w-full absolute bottom-0 left-0 pb-4 pt-16 text-center bg-gradient-to-t from-neutral-100 to-indigo-transparent rounded-lg">
                    <p className="font-medium">{product.name}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="px-[18rem] py-8 space-y-6 border-t-8  border-zinc-100/30">
        <div className="grid grid-cols-6 gap-6">
          {products.map((product) => (
            <div className="col-span-1 h-[18rem] flex flex-col shadow rounded-lg overflow-hidden">
              <div
                className="basis-4/7 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${product.url})`,
                }}
              ></div>
              <div className="basis-3/7 py-4 px-2 flex flex-col">
                <p className="text-sm line-clamp-2">{product.name}</p>
                <h2 className="font-medium">
                  Rp{product.price.toLocaleString("id")}
                </h2>
                <div className="flex items-center text-xs gap-2 mt-2">
                  <Heart size={16} className="text-red-500 fill-current" />
                  <p>10 Wishlist</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Landing;
