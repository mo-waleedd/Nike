
const ShoeCard = (imgURL, changeBigShoeImage, bigShoeImg) => {

  const handleClick = () => {
    if(bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe)
    }
  }

  const img1URL = {}
  const img2URL = {}
  const img3URL = {}

  return (
    <div className={`border-2 rounded-xl ${bigShoeImg === imgURL
                                          ? 'border-coral-red' : 'border-transparent'}
                                          cursor-pointer max-sm:flex-1 `}
                                          onClick={handleClick}>
      
      <div className="flex  justify-center items-center bg-card bg-center bg-cover rounded-xl">
        <img src={img1URL}
        alt="shoe collection"
        className="h-[100px]"/>
      </div>
      <div className="flex  justify-center items-center bg-card bg-center bg-cover rounded-xl">
        <img src={img2URL}
        alt="shoe collection"
        className="h-[100px]"/>
      </div>
      <div className="flex  justify-center items-center bg-card bg-center bg-cover rounded-xl">
        <img src={img3URL}
        alt="shoe collection"
        className="h-[100px]"/>
      </div>
      
    </div>
  )
}

export default ShoeCard
