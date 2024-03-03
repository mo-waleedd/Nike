<section id="home" className="w-screen flex  max-md:flex-col flex-row
justify-start items-start min-h-screen gap-10 max-container pt-20">

<div className="flex relative xl:w-2/5 flex-col max-xl:padding-x pt-10 flex-wrap gap-10">

<p className='text-coral-red '>Our New Collection</p>

<h1 className=''>

<span>The New Arrival</span>
<br />
<span className='text-coral-red'>Nike  </span>Shoes

</h1>

<p className='text-slate-gray text-sm'>Discover Stylish Nike arrivals quality comfort, <br /> 
and innovation for your active life
</p>
<Button label="Shop Now" iconURL={arrowRight}/>

<div className='flex justify-start items-start flex-wrap w-full font-palanquin text-lg
gap-16'>
{statistics.map((stat) => (
<div key={stat.label}> 
<p>{stat.value}</p>
<p>{stat.label}</p>
</div>
))}
</div>

</div>