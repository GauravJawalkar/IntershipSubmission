
import { BiDollarCircle } from 'react-icons/bi'

const TeamName = () => {
    return (
        <div className='flex items-center gap-3'>
            <BiDollarCircle className=" text-5xl max-sm:hidden flex" />
            <h1 className='text-2xl font-bold'>Dollar Cooper Team</h1>
        </div>
    )
}

export default TeamName
