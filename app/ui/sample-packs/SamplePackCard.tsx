import { ReactElement } from "react";
import Image from "next/image";

interface SamplePackCardProps {
  image: string;
  title: string;
  price: string;
  link: string;
}

const SamplePackCard: React.FC<SamplePackCardProps> = ({
  image,
  title,
  price,
  link,
}): ReactElement => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src={image} alt={title} width={192} height={192} className="object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-2">{price}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            Buy Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default SamplePackCard;
