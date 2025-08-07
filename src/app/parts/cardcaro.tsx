'use client';

import { useRef } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { FaCirclePlus } from 'react-icons/fa6';
import './hide-scrollbar.css';

const cards = [
  {
    title: 'Datacenter & Hosting',
    content:
      'Our facility - Data Center - is the first in the USA that meets the strict ANSI/TIA-942 arted 4 certificate requirement for design, build and operate.',
  },
  {
    title: 'Collaboration',
    content:
      'Despite modern cloud technology, your users operate in a familiar Microsoft Office environment and benefit from broad compatibility and low-threshold access.',
  },
  {
    title: 'Cloud Platform',
    content:
      'Customized cloud platform designed to improve performance, lower IT costs, and provide secure and reliable access to your company data from any device.',
  },
  {
    title: 'Network & Connectivity',
    content:
      'Network topologies include hub, linear, tree and star designs, each of which is set up differently to promote connectivity between computers or devices.',
  },
];

export default function ITChallengeCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 424, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -424, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    startX.current = e.pageX - (containerRef.current?.offsetLeft ?? 0);
    scrollLeft.current = containerRef.current?.scrollLeft ?? 0;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX.current;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  return (
    <div className="w-full py-0 my-0">
      {/* Header */}
      <div className="w-full flex justify-center items-center mt-12">
        <div className="bg-zinc-900 shadow-lg rounded-t-2xl rounded-b-none px-10 py-6 max-w-md w-full text-center flex items-center justify-between gap-6">
          <button
            onClick={handlePrev}
            className="text-2xl text-gray-400 hover:text-white transition"
          >
            <FaArrowCircleLeft />
          </button>
          <h2 className="text-lg font-semibold text-gray-200">
            Your IT Challenges
          </h2>
          <button
            onClick={handleNext}
            className="text-2xl text-gray-400 hover:text-white transition"
          >
            <FaArrowCircleRight />
          </button>
        </div>
      </div>

      {/* Carousel Body */}
      <div className="w-full overflow-hidden px-6 mt-15">
        <div
          ref={containerRef}
          className="flex gap-6 cursor-grab overflow-x-auto hide-scrollbar"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 cursor-grab active:cursor-grabbing select-none"
  style={{ width: '400px' }}
  onMouseDown={handleMouseDown}
  onMouseMove={handleMouseMove}
  onMouseUp={handleMouseUp}
  onMouseLeave={handleMouseLeave}
            >
              <Card title={card.title} content={card.content} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ title, content }: { title: string; content: string }) {
  return (
    <div className="bg-zinc-900 hover:bg-zinc-950 cursor-grab rounded shadow-md p-6 text-left hover:shadow-lg transition w-[400px]">
      <h3 className="text-2xl font-semibold mb-2 mt-4 text-white">
        {title}
      </h3>
      <p className="text-gray-300 text-sm mt-4">{content}</p>
      <div className="mt-6 flex items-center gap-2 text-sm text-white">
        <FaCirclePlus className="text-gray-500 text-lg" />
        View more
      </div>
    </div>
  );
}
