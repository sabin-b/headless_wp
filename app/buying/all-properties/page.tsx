import { getpostProperties } from "@/actions/property-post";
import PropertiesList from "@/components/properties-list";
import SearchBar from "@/components/searchbar";
import { ApolloError } from "@apollo/client";

interface AllPropertiesPageprops {
  searchParams: {
    search: string;
  };
}

interface RecieveData {
  data: {
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
  loading: boolean;
  error: ApolloError | undefined;
}

async function AllPropertiesPage({
  searchParams: { search },
}: AllPropertiesPageprops) {
  const response = await getpostProperties(search);
  const { data, error, loading } = response as RecieveData;
  // console.log(data);
  return (
    <section className="text-gray-600 body-font">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Explore Our Featured Properties
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Discover a wide range of rental homes and apartments that suit
              your lifestyle. Whether you&apos;re looking for a cozy studio or a
              spacious family home, we have the perfect property for you.
            </p>
          </div>
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Search
          </h2>
          <SearchBar />
          {/* listing area */}
          <PropertiesList properties={data} />
        </div>
      </section>
      ;
    </section>
  );
}

export default AllPropertiesPage;
