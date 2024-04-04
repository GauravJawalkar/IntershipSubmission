
import TeamName from './TeamLeft/TeamName'
import NewProjectBtn from './TeamRight/NewProjectBtn'

const Team = () => {
    return (
        <div className='sm:py-14 sm:px-10 flex items-center justify-between px-4 py-10 sm:flex-row flex-col'>
            <TeamName />
            <NewProjectBtn />
        </div>
    )
}

export default Team