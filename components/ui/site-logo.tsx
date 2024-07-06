import Image from "next/image";
import Link from "next/link";

function SiteLogo({ url, altText }: { url: string; altText: string }) {
  return (
    <div>
      <Link href="/" className="relative block h-[80px] w-full py-5">
        <Image
          //   src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
          src={url}
          alt={altText}
          fill
          priority
          className="dark:hidden w-full h-full"
          width={0}
          height={0}
          sizes="100vw"
        />
        <Image
          //   src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
          src={url}
          alt={altText}
          fill
          priority
          className="hidden dark:block w-full h-full"
          width={0}
          height={0}
          sizes="100vw"
        />
      </Link>
    </div>
  );
}

export default SiteLogo;
