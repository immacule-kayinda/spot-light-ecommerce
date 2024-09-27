interface ArticleListItemProps {
  regularPrice: string;
  title: string;
  image: string;
}

export default function ArticleListItem({
  image,
  title,
  regularPrice,
}: ArticleListItemProps) {
  return (
    <div className="hover:scale-90 transition-all">
      <img className="rounded-2xl w-auto" src={image} alt={title} />
      <div className="py-3">
        <h1 className="text-lg">{title}</h1>
        <p className="text-xl">{regularPrice}</p>
      </div>
    </div>
  );
}
