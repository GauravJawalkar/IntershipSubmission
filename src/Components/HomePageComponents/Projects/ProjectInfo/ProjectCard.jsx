import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import Popup from "../../../PopupPageComponents/Popup";


const ProjectCard = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className='grid  lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 items-center content-center gap-5 hover:cursor-pointer'>
            <div className="group block border-2 my-6 h-[90%] rounded-md">
                <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?t=st=1712067913~exp=1712071513~hmac=4706dc99a92de573feab2594e8663f8cfd4dcdba3107a323642a23b78ec44212&w=1380" alt="project image" className="w-full rounded-t object-cover" />
                <div className="py-4 px-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        AI Character Demo Storyboard
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">Updated 19 Mar 24</p>
                </div>
            </div>
            <div onClick={() => setShowModal(true)}
                className='flex items-center justify-center bg-orange-50 h-[90%] cursor-pointer rounded'>
                <IoIosAddCircleOutline className="w-28 h-28 text-gray-400 font-light opacity-85 py-4" />
            </div>
            <Popup isVisible={showModal} onClose={() => setShowModal(false)} />
        </div >
    )
}

export default ProjectCard 