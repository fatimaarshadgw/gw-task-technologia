'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export default function TributeCarousel() {
  const [currentCard, setCurrentCard] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  const cards = [
    {
      id: 1,
      name: 'Amanda Parks',
      role: 'Network Manager, Healthcare Organization',
      image: '/photo.webp',
      content:
         'Tecnologia implemented such a powerful platform that we had no break in service when our employees had to work from home due to COVID-19 pandemic, We weren\'t concerned about how to shift to a remote environment because Integris facilitates a seamless transition.',
    },
    {
      id: 2,
      name: 'John Labkins',
      role: 'Partner & CEO, Telecommunication Company',
      image: '/nespresso-logo.webp',
      content: 'Tecnologia has been an outstanding partner. Their team is professional, knowledgeable and customer-service driven. Tecnologia proactive collabrative approacg has been critical in helping us build an IT infrastructure that enables our success today and supports our long-term positioning strategy.',
    },
    {
      id: 3,
      name: 'Daniel Legrante',
      role: 'CIO, Restaurant Product Supplier',
      image: '/logo-R.svg',
      content: 'Ive been a customer for more than a decade. Tecnologia is an example of the way Managed Servuces should be done. They do their very best to make sure you succeed. If theres an issue, they step in immediately. We will continue to be a customer for years to come.',
    },
  ];

  const handlePrev = () => {
    setDirection(-1);
    setCurrentCard((prev) => (prev > 0 ? prev - 1 : cards.length - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentCard((prev) => (prev < cards.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="w-full h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-3xl flex flex-col text-left items-center overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={cards[currentCard].id}
            custom={direction}
            initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="bg-white p-6 w-full"
          >
            <img src={cards[currentCard].image} className="w-13 h-13" alt="" />
            <p className="text-black text-3xl mt-5 leading-normal">
              {cards[currentCard].content}
            </p>
            <p className="mt-4 font-semibold">{cards[currentCard].name}</p>
            <p className="text-sm text-gray-500">{cards[currentCard].role}</p>
          </motion.div>
        </AnimatePresence>

        {/* Arrows below the card */}
       <div className="flex items-center justify-between px-5 gap-4 mt-6 w-full">
  {/* Left section: Arrows */}
  <div className="flex gap-4">
    <button
      onClick={handlePrev}
      className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
    >
      <FaArrowLeft />
    </button>
    <button
      onClick={handleNext}
      className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
    >
      <FaArrowRight />
    </button>
  </div>

  {/* Right section: Add your own divs/content here */}
   <div className="lg:w-50 w-full justify-start flex flex-col items-center mb-12">

    <div className="flex gap-3">
    <Button className='bg-gray-200 text-black font-bold hover:bg-gray-200 hover:text-black size-3'>4.9</Button>
    <div className="flex text-yellow-500 text-lg">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
    </div>

    </div>

    <div className="flex mt-2 gap-3">
    <img className="-ml-6" src="/clutch-logo.svg"/>
    <p className="text-xs font-semibold text-gray-500 mt-1">
        31 REVIEWS</p>
       </div>

    </div>

    <div className="lg:w-50 w-full justify-start flex flex-col items-center mb-12">

    <div className="flex gap-3">
    <p className="text-sm font-meduim text-gray-600">Reviewed on</p>

    <div className="flex text-orange-600 text-lg">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
    </div>

    </div>

    <div className="flex mt-2 gap-3">
    <img className="-ml-6" src="/clutch-logo.svg"/>
    <p className="text-xs font-semibold text-gray-500 mt-1">
        31 REVIEWS</p>
       </div>

    </div>

</div>
      </div>
    </div>
  );
}
