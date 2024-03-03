import { products } from "../constants"
import { star } from "../assets/icons"


const Products = () => {
  return (
    <div className="container flex flex-col flex-wrap gap-4 min-lg:flex-nowrap">
      <div className=" text-[48px] font-semibold">
        <h2 className="font-palanquin"> Our <span className="text-coral-red ">Popular</span> Products </h2>
      </div>
      <p className="text-sm w-[45%] max-md:w-[80%] text-slate-gray "> Experience top-notch quality and style with our sought-after
          selections. Discover a world  of comfort, design, and value
      </p>

      <div className="flex gap-6 max-md:flex-wrap">
        {products.map((product) => (
          <div key={product}>
            <img src={product.imgURL} alt="" />
            <div className="flex flex-col gap-3 pt-4">
              <div className="flex gap-2">
                <img src={star} alt="" />
                <p className=" font-montserrat text-slate-gray">(4.5)</p>
              </div>
              {product.name}
              <p className="text-coral-red font-montserrat font-semibold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products