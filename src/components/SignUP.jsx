

const SignUP = () => {
  return (
    <div className="flex gap-5 justify-between items-center max-md:flex-col">
        <div>
            <h3 className="text-3xl font-palanquin w-[50%] font-bold">
                Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
            </h3>
        </div>

        <div className="">
            <input type="text" 
            placeholder="subscribe@nike.com" 
            className="border border-slate-gray text-slate-gray  text-xs font-palanquin rounded-full pr-40 pl-5 py-3"/>
        </div>
        <button className=" gap-2 px-7 py-2  bg-coral-red text-white border-coral-red rounded-full w-[150px]">
                Sign Up
        </button>
    </div>
  )
}

export default SignUP