import formatCurrency from "@/lib/utils";
import { BathIcon, Bed, Car, Dog } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface PropertyCardProps {
  slug?: string;
  title: string;
  [key: string]: unknown;
  propertyfeatures: {
    bathrooms: number;
    bedrooms: number;
    hasparking: boolean | null;
    petfriendly: boolean | null;
    price: number;
    [key: string]: unknown;
  };
  featuredImage: {
    [key: string]: unknown;
    node: {
      [key: string]: unknown;
      sourceUrl: string;
    };
  };
  content?: TrustedHTML | string;
}

function PropertyCard({
  slug,
  title,
  featuredImage: {
    node: { sourceUrl },
  },
  propertyfeatures: { bathrooms, bedrooms, hasparking, petfriendly, price },
}: PropertyCardProps) {
  return (
    <Link href={`/buying/property/${slug}`}>
      <div className="p-4 h-full">
        <div className="bg-slate-100 flex flex-col gap-y-2 h-full relative p-6 rounded-lg">
          <div className="relative h-40">
            <Image
              src={sourceUrl}
              alt={title}
              className="h-full w-full rounded object-cover object-center mb-6"
              fill
              priority
            />
          </div>

          <h3 className="text-lg hover:text-indigo-500 text-gray-900 font-medium">
            {title}
          </h3>
          <p>{formatCurrency(price)}</p>
          <div className="flex flex-wrap gap-x-2 items-center">
            <span className="flex gap-x-2">
              <BathIcon /> {bathrooms}
            </span>
            <span className="flex gap-x-2">
              <Bed /> {bedrooms}
            </span>
            {hasparking && (
              <span className="flex gap-x-2">
                <Car />
              </span>
            )}
            {petfriendly && (
              <span className="flex gap-x-2">
                <Dog />
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
