interface BannerProps {
  backgroundImageUrl?: string;
  children: React.ReactNode;
}

function Banner({ backgroundImageUrl, children }: BannerProps) {
  const backgroundImage = { backgroundImage: `url(${backgroundImageUrl})` };

  return (
    <section
      style={backgroundImage}
      className="relative bg-gray-900 bg-no-repeat lg:h-screen bg-cover text-white"
    >
      <div className="absolute z-[1] w-full h-full top-0 left-0 bg-slate-700/50"></div>
      <div className="absolute z-10 w-full h-full top-0 left-0">
        <div className=" mx-auto w-full max-w-screen-xl px-4 py-32 lg:flex h-full  lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            {children}
            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
