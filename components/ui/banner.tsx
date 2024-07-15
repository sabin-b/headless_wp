interface BannerProps {
  backgroundImageUrl?: string;
  children: React.ReactNode;
}

function Banner({ backgroundImageUrl, children }: BannerProps) {
  const backgroundImage = { backgroundImage: `url(${backgroundImageUrl})` };

  return (
    <section
      style={backgroundImage}
      className="relative bg-gray-900 z-[0] min-h-[400px] bg-no-repeat h-auto md:min-h-screen bg-cover text-white"
    >
      <div className="absolute z-[1] w-full h-full top-0 left-0 bg-slate-700/50"></div>
      <div className="absolute z-10 w-full h-full top-0 left-0">
        <div className=" mx-auto w-full max-w-screen-xl px-4 py-32 lg:flex h-full  lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
