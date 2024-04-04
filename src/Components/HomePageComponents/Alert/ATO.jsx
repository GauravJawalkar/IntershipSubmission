
import { FaClock } from 'react-icons/fa6'

const ATO = () => {
    return (
        <div>
            <span className="inline-flex items-center justify-center rounded-full bg-amber-300 px-4 py-0.5 text-amber-700">
                <FaClock className="text-gray-700" />
                <p className="whitespace-nowrap text-md text-gray-700 font-bold py-1 px-2 ">One Time Offer</p>
            </span>
        </div>
    )
}

export default ATO