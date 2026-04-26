import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
  {
    _id: "1",
    title: "Bangladesh government announces new digital economy policy to boost tech startups",
  },
  {
    _id: "2",
    title: "Heavy monsoon rain disrupts transport in Dhaka and surrounding districts",
  },
  {
    _id: "3",
    title: "Export earnings rise in textile sector despite global economic slowdown",
  },
  {
    _id: "4",
    title: "Dhaka Metro Rail expansion plan approved for additional routes",
  },
  {
    _id: "5",
    title: "Price of rice stabilizes after weeks of market fluctuation",
  },
  {
    _id: "6",
    title: "Bangladesh Bank introduces new measures to control inflation",
  },
  {
    _id: "7",
    title: "National university admission results published across the country",
  },
  {
    _id: "8",
    title: "Rising fuel prices impact transportation and daily life costs",
  },
  {
    _id: "9",
    title: "Cricket team prepares for upcoming international T20 series",
  },
  {
    _id: "10",
    title: "Government launches nationwide clean energy initiative for rural areas",
  },
];
const TextAnimate = () => {
    return (
        <div className='container mx-auto flex p-2 gap-3.5 bg-white/10'>
            <div className=' bg-red-500 px-3 py-1'>Latest</div>
            <Marquee   pauseOnHover>
                {
                    news.map(i=> <span className='me-6' key={i.id}>{i.title} ! </span>)
                }
            </Marquee>
        </div>
    );
};

export default TextAnimate;