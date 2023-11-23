import Image from 'next/image';

interface EventCardProps {
    styling?: string;
    photo: {
      src: string;
      alt: string;
    };
    title?: string;
    time?: string;
    location?: string;
    paragraph?: string;
  }

export default function EventCard({ styling, photo, title, time, location, paragraph}:EventCardProps) {
    return (
      <div className={`${styling} flex flex-col mx-auto items-center space-y-5 md:flex-row md:space-x-8`}>
        <div className="relative w-52 h-52 md:h-72 overflow-hidden md:w-1/3">
          <Image 
            src={photo.src}
            alt={photo.alt}
            fill={true}
            objectFit="contain"
          />
        </div>
        <div className="flex items-center md:w-2/3">
          <div className="text-center md:text-left">
            <h4 className="">{title}</h4>
            <h5 className="">{time}</h5>
            <h5 className="">{location}</h5>
            <p className="mt-4 sm:px-20 md:px-0">
              {paragraph}
            </p>
          </div>
        </div>
      </div>
    );
  }