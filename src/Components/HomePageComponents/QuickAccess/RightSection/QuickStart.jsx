import CustomBtn from "./CustomBtn"
import QSButton from "./QSButton"
import SearchBar from "./SearchBar"
import SimpleBtn from "./SimpleBtn"


const QuickStart = () => {
    return (
        <div className='flex items-center gap-4 lg:pb-0 pb-4'>
            <SearchBar />
            <QSButton />
            <SimpleBtn />
            <CustomBtn />
        </div>
    )
}

export default QuickStart