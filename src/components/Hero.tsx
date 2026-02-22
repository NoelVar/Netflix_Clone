const Hero = () => {
    return (
        <div className="bg-[url(./assets/hero-background.jpg)] bg-fixed bg-no-repeat bg-center bg-cover h-120 relative">
            <div className="bg-black/75 h-full flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center p-10 max-w-lg">
                    <h2 className="text-4xl font-bold text-center">Unlimited movies, TV shows, and more</h2>
                    <p>Starts at £7.99. Cancel anytime</p>
                    <button className="px-6 py-3 font-semibold bg-red-600 text-white rounded-sm cursor-pointer shadow-red-600/50 shadow-lg hover:bg-red-700 transition mt-10">
                        Start Your Membership
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero;