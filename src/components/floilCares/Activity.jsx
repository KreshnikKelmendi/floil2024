import React, { useEffect, useState } from 'react'
import firstActivity from "../assets/Untitled-53333 1.png"
import { events } from '../../data/events';

const Activity = () => {
    const [data, setData] = useState(events);
    const [selectedEvent, setSelectedEvent] =useState();
    const [event, setEvent] = useState();
    const [active, setActive] = useState(-1);
  
    const handleClick = (e) => {
       setEvent(events.find((el)=>(el.id === e)))
       setData(events.filter((element)=> e !== element.id ))
      //  console.log(e)
    }
    
  
    useEffect(() => {
       if (events) {
        setSelectedEvent(events[0].id)
        handleClick(events[0].id)
        setData(events.filter((element)=>events[0].id !== element.id ))
       }
       
    }, [])
    
  return (

    <>
    <div className="flex flex-col lg:flex-row px-4 lg:px-[120px] mt-[98px]">
      <div className="lg:w-1/2 flex">
        <img src={event?.img} alt="activity" className="w-full object-cover" />
      </div>
      <div className="lg:ml-[85px] mt-6 lg:w-1/2 flex text-black justify-center items-center">
        <div>
          <h2 className="text-[26.6px] font-sans2 mb-2">
                {event?.name}
          </h2>
          <p className="text-[15px] mt-8">
                {event?.desc}
          </p>
        </div>
      </div>
    </div>

    <div className='grid lg:grid-cols-3 gap-y-12 gap-x-[80px] px-4 mt-[94px] lg:px-[120px]'>
        {data?.map((item,index) => (
            <div className='cursor-pointer' onClick={() => handleClick(item.id)}>
                <img src={item?.img} alt="" className='w-full h-76 lg:w-[346px] lg:h-[282px] rounded-xl object-cover' />
                <p className="mt-[23px] 2xl:w-[346px] text-center font-sans2 text-[25px]" 
                          style={{color: active === index ? item.color : item.color}} 
                          onClick={()=>setActive(index)}>{item.name}
                        </p>
            </div>
        ))}
    </div>

    </>
  )
}

export default Activity