import popCorn from '../assets/pop_corn.png';

const Ad = () => {
    return (
        <div className='md:flex md:flex-row hidden justify-center item-center gap-5 m-10 mx-50'>
            <img src={popCorn} alt='pop-corn' className='lg:flex hidden w-8 h-10 lg:w-15 lg:h-15 sm:w-15 sm:h-15'></img>
            <div className='flex lg:flex-row flex-col justify-between p-3 bg-gradient-to-br from-[#261633] to-[#14193e] rounded-2xl w-full shadow-lg'>
                <div className='flex flex-col'>
                    <h3 className='text-lg font-bold'>
                        The Netflix you love for just £7.00.
                    </h3>
                    <p>Get our next affordable, ad-supported plan.</p>
                </div>
                <button className="px-2 lg:py-1 py-3 font-semibold bg-[#404357] rounded-sm text-sm cursor-pointer lg:m-2 m-3 mt-5 hover:bg-red-700 transition">Learn More</button>
            </div>
        </div>
    )
}

export default Ad;