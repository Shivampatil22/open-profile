
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const TestimonialCard = ({
  imgUrl,
  name,
  title,
  content,
}: {
  imgUrl: string;
  name: string;
  title: string;
  content: string;
}) => {
  return (
    <article className="bg-slate-200 md:w-[46%] w-full h-48 flex items-center px-2 rounded-md boxshadow mx-2 my-3">
      <div className="w-max h-full flex items-center ">
        <Avatar className=" h-32 w-32">
          <AvatarImage src={imgUrl} />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
      </div>
      <section className="flex w-full h-full p-2 justify-around flex-col pl-8">
        <div className="text-lg font-semibold content-text">{content}</div>
        <div className="flex flex-col content-text">
          <span className="text-lg text-blue-700 font-extrabold ">{name}</span>
          <span className="text-lg text-slate-600 font-normal ">{title}</span>
        </div>
      </section>
    </article>
  );
};

export default TestimonialCard;
