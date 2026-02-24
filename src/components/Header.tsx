import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-[100] py-5">
            <div className="max-w-6xl mx-auto px-6 md:px-6 flex justify-between items-center">
                <h1 className="text-2xl lg:text-4xl font-bold text-red-600">NETFLIX</h1>
                <div>
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}

export default Header;