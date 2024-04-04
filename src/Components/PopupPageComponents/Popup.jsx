

import { IoMdClose } from 'react-icons/io';
import { MdOutlineToggleOff } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const Popup = ({ isVisible, onClose }) => {

    if (!isVisible) return null;
    return (
        <div className='flex items-center justify-center h-screen inset-0 fixed px-2 bg-black bg-opacity-45'>
            <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8 sm:min-w-[500px] min-w-[300px] " role="alert">
                <div className="flex items-center gap-4 justify-between">
                    <p className={`rafine font-medium text-3xl`}>New StoryBoard</p>
                    <IoMdClose className='w-9 h-9 cursor-pointer rounded-full bg-orange-50 p-2' onClick={() => onClose()} />
                </div>
                <div className='py-6 border-b'>
                    <div className='py-6'>
                        <label htmlFor="StoryboardName" className="block text-sm font-medium text-gray-700"> Storyboard Name </label>
                        <input type="eg" id="eg" placeholder="e.g. Default Project Storyboard" className="mt-1 w-full border border-gray-400 shadow-sm sm:text-sm py-3 px-2" />
                    </div>
                    <div>
                        <label htmlFor="FrameSize" className="block text-sm font-medium text-gray-700"> Frame Size </label>
                        <select name="HeadlineAct" id="HeadlineAct" className="mt-1.5 w-full py-3 px-2 border border-gray-300 text-gray-700 sm:text-sm">
                            <option value="">Landscape (16:9)</option>
                            <option value="JH">Joy Boy</option>
                            <option value="BBK">Pirate King</option>
                            <option value="AK">Four Yonkos</option>
                            <option value="BG">Roronora Zoro</option>
                        </select>
                    </div>
                </div>
                <div className="mt-6  sm:gap-4">
                    <div className='flex items-center justify-between '>
                        <div className='flex items-center justify-between gap-2'>
                            <MdOutlineToggleOff className='h-6 w-6' />
                            <h2 className='text-sm font-light'>AI Assistant</h2>
                        </div>
                        <div>
                            <button className="mt-2 inline-block w-full rounded-lg bg-orange-100 px-5 py-3 text-center text-sm font-semibold text-gray-300 sm:mt-0 sm:w-auto bg-opacity-75">
                                Create Storyboard
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Popup