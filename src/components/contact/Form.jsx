import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const [emailSent, setEmailSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d5cn519', 'template_fklrsei', form.current, 'RJ4t9qdU2reE_hrTn')
      .then((result) => {
          console.log(result.text);
          setEmailSent(true)
            setTimeout(() => {
              setEmailSent(false)
            }, 3000)
          return;
      }, (error) => {
          console.log(error.text);
      });
      
      e.target.reset()
    }
  return (
    <div className="lg:px-[120px] mt-6 lg:mt-12 mx-auto flex flex-col lg:flex-row py-12 px-4">
      {/* Left Div */}
      <div className="lg:w-1/2 pr-8">
        <h2 className="text-[26px] text-[#434343] font-bold mb-4 font-sans">Kontakti</h2>
        <p className="text-[#848484] text-[15px] lg:w-[90%] font-sans font-normal mb-4 mt-12">
          Për çdo pyetje apo kërkesë që keni rreth rafinerisë tonë apo produkteve tona mund të plotësoni formularin me të dhënat tuaja dhe ne do ju kontaktojmë sapo të shqyrtojmë mesazhin tuaj.
        </p>
      </div>

      {/* Right Div with Form */}
      <div className="mt-6 lg:mt-0 lg:w-1/2 font-sans">
        <form className="grid grid-cols-1 lg:grid-cols-2 gap-y-[24px]">
          <div>
            <input placeholder='Emri' type="text" id="name" name="name" className="w-full bg-[#F6F6F6] p-2 pl-[23px] rounded-md" />
          </div>
          <div>
            <input placeholder='Mbiemri' type="text" id="surname" name="surname" className="w-full bg-[#F6F6F6] p-2 pl-[23px] rounded-md lg:ml-[24px]" required />
          </div>
          <div>
            <input placeholder='E-mail' type="email" id="email" name="email" className="w-full bg-[#F6F6F6] p-2 pl-[23px] rounded-md" required />
          </div>
          <div>
            <input placeholder='Nr.Tel' type="tel" id="phone" name="phone_number" className="w-full p-2 bg-[#F6F6F6] pl-[23px] rounded-md lg:ml-[24px]" required />
          </div>
         
        </form>
        <div className='mt-[24px]'>
          <textarea className='w-full lg:w-[535px] 2xl:w-full pl-[23px] bg-[#F6F6F6] py-2 rounded-md' rows={4} placeholder='Mesazhi...' name="message" required/>
          <button className='bg-[#F3C24E] px-[25px] py-[11px] mt-[20px] rounded-md text-white font-sans hover:text-[#434343] hover:bg-white'>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
