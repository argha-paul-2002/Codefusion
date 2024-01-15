import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
        CODEFUSION
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Elevating Solutions</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">CodeFusion Hackathon represents the pinnacle of collaborative innovation in technology and healthcare. It's a crucible for ideas where the brightest minds converge to chart new courses in these critical fields. Our event is more than a competition; it's a beacon for forward-thinkers and problem-solvers dedicated to making significant strides in digital and medical frontiers. Here, offline challenges meet online solutions, as participants weave their expertise to craft groundbreaking advancements. Join us at CodeFusion, where professional collaboration reshapes the future of technology and healthcare.</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image 
          src="/timeline.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">From</p>
                <p className="bold-16 text-green-50">48 Hrs</p>
              </div>
              <p className="bold-20 mt-2">28th Jan, 2024</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">To</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">30th Jan, 2024</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide