import ProjectDashboard from "./LeftSection/ProjectDashboard"
import QuickStart from "./RightSection/QuickStart"


const QuickAccess = () => {
    return (
        <div className="flex items-center md:justify-between border-b bg-white max-lg:flex-col justify-center">
            <ProjectDashboard />
            <QuickStart />
        </div>
    )
}

export default QuickAccess