import React from "react";
import Senior from '../images/SENIOR-221.JPG'
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Sydney!
          </h1>
          <p className="mb-8 leading-relaxed">
          I am a senior at Ursuline Academy who hopes to major in data science at a four year university!
          I am a community service leader and I also work part-time at Skyline Chili. 
         
           
          </p>
          <p>
          My hobbies include running cross country and swimming for Ursuline, 
          listening to music, reading, journaling, and scrolling on tiktok.
          I love playing the Sims 4 and Minecraft in my free time.
          I also love traveling and hope to study or work abroad one day!
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={Senior}
          />
        </div>
      </div>
    </section>
  );
}