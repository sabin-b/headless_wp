import { getSingleProperty } from "@/actions/property-single";
import { PropertyCardProps } from "@/components/property-card";
import Paragraph from "@/components/ui/paragraph";
import formatCurrency from "@/lib/utils";
import { BathIcon, Bed, Car, Dog } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

interface SinglePropertyProps {
  params: {
    slug: string;
  };
}

async function SingleProperty({ params }: SinglePropertyProps) {
  const property: PropertyCardProps = await getSingleProperty(params.slug);
  // console.log(property);
  if (!property) return notFound();
  return (
    <div className="p-4 container max-w-7xl h-full">
      <div className=" flex flex-col gap-y-2 h-full relative p-6 rounded-lg">
        <div className="relative h-56">
          <Image
            src={property.featuredImage.node.sourceUrl}
            alt={property.title}
            className="h-full w-full rounded object-cover object-center mb-6"
            fill
            priority
          />
        </div>

        <h3 className="text-lg hover:text-indigo-500 text-gray-900 font-medium">
          {property.title}
        </h3>
        <p>{formatCurrency(property.propertyfeatures.price)}</p>
        <div className="flex flex-wrap gap-x-2 items-center">
          <span className="flex gap-x-2">
            <BathIcon /> {property.propertyfeatures.bathrooms}
          </span>
          <span className="flex gap-x-2">
            <Bed /> {property.propertyfeatures.bedrooms}
          </span>
          {property.propertyfeatures.hasparking && (
            <span className="flex gap-x-2">
              <Car />
            </span>
          )}
          {property.propertyfeatures.petfriendly && (
            <span className="flex gap-x-2">
              <Dog />
            </span>
          )}
        </div>
        <Paragraph content={property.content!} />
      </div>
    </div>
  );
}

export default SingleProperty;
