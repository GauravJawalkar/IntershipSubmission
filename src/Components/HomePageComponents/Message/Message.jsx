import { RiChatSmileFill } from "react-icons/ri";

const Message = () => {
    return (
        <div className='flex items-center justify-end sticky bottom-4 px-4'>
            <RiChatSmileFill className=" p-3 bg-black rounded-full text-white h-[60px] w-[56px] " />
        </div>
    )
}

export default Message