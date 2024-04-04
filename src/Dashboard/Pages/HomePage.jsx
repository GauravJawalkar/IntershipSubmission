import Alert from "../../Components/HomePageComponents/Alert/Alert"
import Message from "../../Components/HomePageComponents/Message/Message"
import ProjectHolder from "../../Components/HomePageComponents/Projects/ProjectHolder"
import QuickAccess from "../../Components/HomePageComponents/QuickAccess/QuickAccess"
import Team from "../../Components/HomePageComponents/Team/Team"

const HomePage = () => {
    return (
        <div className="eina bg-orange-50 ">
            <Alert />
            <QuickAccess />
            <Team />
            <ProjectHolder />
            <Message />
        </div>
    )
}

export default HomePage