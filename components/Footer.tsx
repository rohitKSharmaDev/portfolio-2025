import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer
      className="w-full pt-20 pb-50 md:pb-20 relative bg-gray-950 bg-[url(/footer-grid.svg)] bg-repeat bg-center bg-cover"
      id="contact"
    >
      <div className="max-w-[85vw] mx-auto">
        <div className="flex flex-col items-center">
          <h5 className="text-white text-4xl lg:max-w-[45vw] font-bold">
            Ready to take <span className="text-purple-300">your</span> digital
            experience to the next level?
          </h5>
          <p className="text-white md:mt-10 my-5 text-center">
            React out to me and let&apos;s discuss how I can help you achieve
            your goals!
          </p>
          <a href="mailto:rohitksharmadev@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="flex mt-16 md:flex-row flex-col items-center justify-between rounded-lg">
          <p className="text-gray-100 md:text-base text-sm md:font-normal font-light">
            Copyright &copy; 2024 Rohit Sharma{" "}
          </p>

          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((profile) => (
              <div
                key={profile.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center hover:scale-110 transition-transform"
              >
                <img
                  src={profile.img}
                  alt={profile.id}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer