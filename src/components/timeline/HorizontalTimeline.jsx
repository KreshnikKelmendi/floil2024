import React from 'react';
import timelineLine from '../assets/timelineLine.png';
import circleTimeline from '../assets/Ellipse 2.png';

const TimelineItem = ({ title, date, content }) => (
  <div className="flex flex-col items-center mx-auto">
    <p className="font-sans font-semibold text-[20px] text-[#434343]">{title}</p>
    <div className="hidden lg:block circle mt-6 w-4 h-4 bg-yellow-500 rounded-full"></div>
    <p className=" text-[#434343] text-[16px] font-semibold p-2 rounded-md">{date}</p>
    <div className="w-[75%] text-center text-[#848484]">{content}</div>
  </div>
);

const HorizontalTimeline = () => {
  return (
    <div className="horizontalBg py-12 mt-16 mx-auto" data-aos="fade-in">
      <div className="text-center my-5">
        <h2 className="text-transition text-[33.5px] font-sans text-[#434343] font-bold">Zhvillimi i kompanisë drejt suksesit</h2>
      </div>

      <div className="flex flex-col lg:flex-row  mt-12 divide-y-2 lg:divide-y-0 justify-center py-5 gap-y-5">
        <TimelineItem title="Produktet e para" date="2017" content="Plasimi i vajit të lulediellit dhe gjalpit" />
        <TimelineItem title="Produkti më i ri" date="2022" content="Plasimi i vajit rapsol Floil në treg" />
        <TimelineItem title="Iniciativat" date="2022" content="Krijimi i fondacionit Floil Cares" />
      </div>
    </div>
  );
};

export default HorizontalTimeline;
