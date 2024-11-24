interface CardProfileInfoProp {
  icon: string;
  title: string;
  content: string;
}

const CardProfileInfo: React.FC<CardProfileInfoProp> = ({
  icon,
  title,
  content,
}) => {
  return (
    <div className="flex items-center w-11/12 border-2 p-1 rounded-md border-black mt-2">
      <img src={icon} alt={title} className="w-8" />
      <p className="text-black ms-4">{content}</p>
    </div>
  );
};

export default CardProfileInfo;
