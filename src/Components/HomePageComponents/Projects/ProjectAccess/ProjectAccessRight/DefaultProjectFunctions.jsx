import { SlOptionsVertical } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";


const DefaultProjectFunctions = () => {
    return (
        <div className="items-center gap-5 hidden sm:flex">
            <SlOptionsVertical className="cursor-pointer hover:bg-gray-100 rounded-full p-2 w-8 h-8" />
            <IoIosArrowDown className="rounded-full p-2 w-8 h-8 hover:bg-gray-100 font-extrabold" />
        </div>
    )
}

export default DefaultProjectFunctions