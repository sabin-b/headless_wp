import PropertyCard from "./property-card";

interface PropertiesListProps {
  properties: {
    slug: string;
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
  }[];
}

function PropertiesList({ properties }: PropertiesListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 -m-4">
      {properties.map((property) => (
        <PropertyCard
          key={property.slug}
          propertyfeatures={property.propertyfeatures}
          featuredImage={property.featuredImage}
          slug={property.slug}
          title={property.title}
        />
      ))}
    </div>
  );
}

export default PropertiesList;
