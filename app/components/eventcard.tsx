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
      <div className={`${styling} space-x-10 flex flex-col mx-auto items-center space-y-5 md:flex-row`}>
        <img 
          src={photo.src}
          alt={photo.alt}
          className="w-52 h-full sm:w-72"
        />
        <div className="flex items-center">
          <div className="text-center md:text-left">
            <h4 className="">{title}</h4>
            <h5 className="">{time}</h5>
            <h5 className="">{location}</h5>
            <p className="mt-4">
              {paragraph}
            </p>
          </div>
        </div>
      </div>
    );
  }