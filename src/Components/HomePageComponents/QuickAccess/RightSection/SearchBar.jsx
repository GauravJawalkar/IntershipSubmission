import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    return (
        <div className="md:min-w-80 max-sm:min-w-28 min-w-52 ">
            <label htmlFor="Username" className="relative flex border border-gray-200 shadow-sm focus-within:border-gray-200 focus-within:ring-1 focus-within:ring-gray-100 bg-gray-50 ">
                <input type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 px-1 py-[6px] " placeholder="Username" />
                <span className=" flex items-center gap-2 pointer-events-none absolute start-2.5 top-0 -translate-y-1/2  p-0.5 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    <FaSearch /> Search my storyboards
                </span>
            </label>
        </div>
    )
}

export default SearchBar