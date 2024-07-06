import Link from "next/link";

const ListItem = ({
  children,
  NavLink,
}: {
  children: React.ReactNode;
  NavLink: string;
}) => {
  return (
    <>
      <li>
        <Link
          href={NavLink}
          className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
        >
          {children}
        </Link>
      </li>
    </>
  );
};

export default ListItem;
