import React from 'react';

const Map = () => {
  return (
    <div className="mapouter mt-6 lg:mt-24">
        <div className="gmap_canvas">
            <iframe className='w-full h-[50vh] lg:h-[75vh]' 
                    id="gmap_canvas" 
                    title="Location of Floil" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23560.245114559955!2d21.438992989730423!3d42.42708270869048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354f34ce0a30c21%3A0x550e1c53606645a4!2sVelekinc%C3%AB!5e0!3m2!1sen!2s!4v1681492632691!5m2!1sen!2s=&output=embed">
            </iframe>
        </div>
    </div>
  )
}

export default Map;