import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { testimonials } from '@/data'
// import Image from 'next/image';

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="text-5xl text-white text-center">
        Kind words from{" "}
        <span className="text-purple-300"> satisfied clients</span>
      </h1>
      <div className="flex flex-wrap items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />

        {/* <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10 w-full">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <Image
                src={img}
                alt={name}
                width={40}
                height={40}
                loading="lazy"
                className="md:w-10 w-5"
              />

              <Image
                src={nameImg}
                alt={name}
                width={96}
                height={96}
                loading="lazy"
                className="md:w-10 w-5"
              />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Clients