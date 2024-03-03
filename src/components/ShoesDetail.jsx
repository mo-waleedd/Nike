import { shoe8 } from "../assets/images"

const ShoesDetail = () => {
    return (
        <div className="container flex gap-6 max-md:flex-col ">
            <div className="flex flex-col gap-4 w-[50%] mt-10 max-md:w-[100%]">
                
                <h2 className="m-0 text-[35px] font-semibold font-palanquin"> We Provide You <span className="text-coral-red">Super Quality</span> Shoes </h2>
                
                <p className="text-xs text-slate-gray w-[55%] max-md:w-[90%] font-montserrat">Ensuring Premium <span className="text-coral-red">comfort</span> and <span className="text-coral-red">style</span>, our meticulously
                    crafted footwear is designed to elevate your experience,
                    providing you with unmatched quality, innovation, and a
                    touch of elegance.
                </p>
                <p className="text-xs text-slate-gray w-[60%] max-md:w-[90%]">Our dedication to detail and excellence
                    ensure <span className="text-coral-red">your satisfaction</span></p>
                    <button className=" bg-coral-red w-[25%] max-md:w-[35%]  py-2 px-2 rounded-full text-white text-[12px] font-montserrat"> View details</button>
            </div>
            
            <div className="w-[65%] self-center">
                <img src={shoe8} alt="" />
            </div>
        </div>
    )
}

export default ShoesDetail