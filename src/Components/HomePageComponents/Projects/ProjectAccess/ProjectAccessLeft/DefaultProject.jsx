import { BsFolder2Open } from "react-icons/bs";

const DefaultProject = () => {
    return (
        <div className="flex items-center sm:gap-5 gap-2">
            <BsFolder2Open className="text-3xl" />
            <div>
                <h1 className="text-xl truncate ">Default Project</h1>
                <p className="sm:text-base text-sm font-light text-gray-400">1 storyboard</p>
            </div>
        </div>
    )
}

export default DefaultProject