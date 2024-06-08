export type HeadingVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps {
  variant?: HeadingVariants;
  children: React.ReactNode;
}

const baseStyles = "font-extrabold text-gray-900 dark:text-white";

const size = {
  h1: `${baseStyles} mb-4 text-4xl md:text-5xl lg:text-6xl`,
  h2: `${baseStyles} mb-3 text-5xl md:text-4xl lg:text-5xl`,
  h3: `${baseStyles} mb-2 text-6xl md:text-3xl lg:text-4xl`,
  h4: `${baseStyles} mb-1 text-4xl md:text-2xl lg:text-3xl`,
  h5: `${baseStyles} mb-1 text-4xl md:text-1xl lg:text-2xl`,
  h6: `${baseStyles} mb-1 text-4xl md:text-1xl lg:text-1xl`,
};

const Heading: React.FC<HeadingProps> = ({
  variant = "h1",
  children,
}: HeadingProps) => {
  const Tag = variant as keyof JSX.IntrinsicElements;

  return <Tag className={size[variant]}>{children}</Tag>;
};
export default Heading;
