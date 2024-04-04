/* eslint-disable react/prop-types */



const AlertTime = ({ time }) => {
  return (
    <div className='bg-amber-100 px-2 py-[2px] rounded-sm'>
      <h1 className='text-pink-500 font-bold'>{time}</h1>
    </div>
  )
}

export default AlertTime