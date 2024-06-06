export type HeadingVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps {
  variant?: HeadingVariants;
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({
  variant = "h1",
  children,
}: HeadingProps) => {
  const Tag = variant as keyof JSX.IntrinsicElements;

  return (
    <Tag className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
      {children}
    </Tag>
  );
};
export default Heading;
