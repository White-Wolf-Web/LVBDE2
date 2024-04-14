import Image from "next/legacy/image";
import Link from "next/link";


interface MassageCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  url: string;
}
export default function MassageCard({ title, description, imageUrl, imageAlt, url }: MassageCardProps) {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Link href={url} >
            <Image src={imageUrl} alt={imageAlt} width={400} height={250} layout="responsive" title={title} /></Link>
            <div className="p-4">
              <h3 className="text-xl text-black font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        </div>
      );
    };