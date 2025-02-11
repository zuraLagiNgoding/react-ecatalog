import { Link, useParams } from 'react-router-dom'
import { featuredProduct, products } from '../const/product';

const Category = () => {
  const param = useParams();

  const category = featuredProduct.find(f => f.url === param.category)?.name

  return (
    <>
      <div className="px-[18rem] py-8 overflow-hidden">
        <div className="bg-gray-50 shadow-lg rounded-lg px-8 py-5 space-y-4">
          <h2 className="text-3xl">{category}</h2>
          <p className="text-sm tracking-wide select-none">
            Beranda / Category /{" "}
            <span className="font-medium text-blue-400">{category}</span>
          </p>
        </div>
      </div>
      <div className="px-[18rem] py-8 space-y-6">
        <div className="grid grid-cols-6 gap-6">
          {products
            .filter((f) => f.category === category)
            .map((product) => (
              <Link
                to={"/category/" + product.categoryURL + "/" + product.name}
                className="col-span-1 h-[12rem] flex flex-col shadow rounded-lg overflow-hidden"
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
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}

export default Category