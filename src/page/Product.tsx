import { ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../const/product'
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Product = () => {
  const param = useParams();
  const [show, setShow] = useState(false);

  const product = products.find(f => f.name === param.product)

  return (
    <>
      <div className="px-[18rem] py-8 flex gap-12">
        <div className="basis-9/12">
          <img
            src={product?.url}
            alt={product?.name}
            className="h-full object-cover shadow-xl rounded-xl"
          />
        </div>
        <div className="basis-3/12 space-y-3">
          <div className="space-y-1.5">
            <h2 className="font-medium text-lg">{product?.name}</h2>
            <p className="text-xs bg-sky-900 w-fit text-white py-1 px-3 rounded-md">
              {product?.category}
            </p>
          </div>
          <p className="opacity-85 text-justify">{product?.description}</p>
        </div>
      </div>
      <div className="px-[18rem] py-8 space-y-12 mb-28">
        {
          show &&
          <div className="px-24">
            <img
              src={product?.detail}
              alt={"Product Detail of" + product?.name}
            />
          </div>
        }
        {
          show ?
        <div className="w-full items-center flex gap-2 justify-center text-blue-500 hover:text-neutral-500 cursor-pointer" onClick={() => setShow(!show)}>
          <h2 className="text-center text-sm">Show Less</h2>
          <ChevronUp size={18} />
        </div>
        :
        <div className="w-full items-center flex gap-2 justify-center text-blue-500 hover:text-neutral-500 cursor-pointer" onClick={() => setShow(!show)}>
          <h2 className="text-center text-sm">Show More Detail</h2>
          <ChevronDown size={18} />
        </div>
        }
      </div>
      <div className="px-[18rem] pb-12 pt-24 space-y-6 border-zinc-100/30 bg-gray-200/25">
        <h2 className="text-2xl font-medium">Produk Lainnya</h2>
        <div className="grid grid-cols-5 gap-6">
          {products
            .filter((f) => f.name !== product?.name)
            .map((product, index) => (
              <a
                href={"/category/" + product.categoryURL + "/" + product.name}
                className="col-span-1 h-[12rem] flex flex-col shadow rounded-lg overflow-hidden"
                key={index}
              >
                <div
                  className="basis-3/5 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${product.url})`,
                  }}
                ></div>
                <div className="basis-2/5 py-4 px-2 flex flex-col gap-2">
                  <p className="text-sm line-clamp-2 font-medium">
                    {product.name}
                  </p>
                  <p className="text-xs bg-sky-900 w-fit text-white py-1 px-3 rounded-md">
                    {product.category}
                  </p>
                  {/* <h2 className="font-medium">
                  Rp{product.price.toLocaleString("id")}
                </h2>
                <div className="flex items-center text-xs gap-2 mt-2">
                  <Heart size={16} className="text-red-500 fill-current" />
                  <p>10 Wishlist</p>
                </div> */}
                </div>
              </a>
            ))}
        </div>
      </div>
    </>
  );
}

export default Product