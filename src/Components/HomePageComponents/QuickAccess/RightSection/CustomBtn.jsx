import { HiOutlineLightningBolt } from "react-icons/hi";


const CustomBtn = () => {
    return (
        <button className="bg-black py-3 px-3 rounded-l-full hidden lg:flex">
            <HiOutlineLightningBolt className="text-white text-2xl" />
        </button>
    )
}

export default CustomBtn