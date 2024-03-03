
const Button = ({label, iconURL}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 leading-none
      font-montserrat text-lg border bg-coral-red rounded-full text-white w-52 h-10">
        {label}
        <img src={iconURL} alt="right arrow" />
    </button>
  )
}

export {Button}