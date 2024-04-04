import DefaultProject from "./ProjectAccess/ProjectAccessLeft/DefaultProject"
import DefaultProjectFunctions from "./ProjectAccess/ProjectAccessRight/DefaultProjectFunctions"
import ProjectCard from "./ProjectInfo/ProjectCard"


const ProjectContainer = () => {
    return (
        <div className='px-10 bg-white py-6 rounded-md h-full'>
            <div className='flex items-center justify-between  pb-4'>
                <DefaultProject />
                <DefaultProjectFunctions />
            </div>
            <ProjectCard />
        </div>
    )
}

export default ProjectContainer