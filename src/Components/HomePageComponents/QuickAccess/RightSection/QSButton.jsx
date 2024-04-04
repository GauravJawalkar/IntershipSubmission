
import { TbBrandDaysCounter } from 'react-icons/tb'

const QSButton = () => {
    return (
        <button className='sm:flex hidden items-center bg-blue-50 px-3 py-2 rounded-sm ring-2 ring-blue-200 gap-2 font-bold line-clamp-1 truncate'>
            <TbBrandDaysCounter className='h-5 w-5' />
            Quick Start
        </button>
    )
}

export default QSButton