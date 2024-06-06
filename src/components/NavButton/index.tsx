import Link from "next/link";

interface NavLinkProps {
  url?: string;
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ url, text }: NavLinkProps) => {
  return (
    <Link
      href={url || "/"}
      className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {text}
    </Link>
  );
};
export default NavLink;
