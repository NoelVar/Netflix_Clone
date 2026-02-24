import heroBg from '../assets/hero-background.jpg';

const Hero = () => {
    return (
        <div className="relative min-h-[90vh] flex item-center justify-center overflow-hidden w-full bg-gradient-to-br from-black via-gray-900 to-black">
            <img
                src={heroBg}
                alt="Hero background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/75" />

            <div className="relative flex flex-col items-center justify-center z-1 max-w-[600px] w-full">
                <div className="flex flex-col items-center justify-center p-10 sm:px-3 md:px-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center drop-shadow-lg mb-6">Unlimited movies, TV shows, and more</h2>
                    <p className="sm:text-sm md:text-xl drop-shadow-md">Starts at £7.99. Cancel anytime</p>
                    <button className="px-6 py-3 font-semibold bg-red-600 text-white rounded-sm cursor-pointer shadow-red-600/50 shadow-lg hover:bg-red-700 transition mt-10">
                        Start Your Membership
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero;