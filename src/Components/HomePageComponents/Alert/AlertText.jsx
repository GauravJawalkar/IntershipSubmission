/* eslint-disable react/prop-types */

import AlertTime from './AlertTime'

const AlertText = ({ text }) => {
    return (
        <h2 className='font-semibold flex items-center gap-2 truncate overflow-x-scroll md:overflow-hidden'>
            {text} <AlertTime time={"5:01"} />
        </h2>
    )
}

export default AlertText