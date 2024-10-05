interface TagProps {
  tags?: string[];
}

const Tags: React.FC<TagProps> = ({ tags }: TagProps) => {
  return (
    <>
      {tags?.map((tag: string) => (
        <a
          href={`#${tag}`}
          className="p-1 mr-1 bg-white text-black hover:bg-sky-700"
        >
          {tag}
        </a>
      ))}
    </>
  );
};
export default Tags;
