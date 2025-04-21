interface ProjectProps {
  title: string;
  description: string;
  thumbnail: string;
}

const Project = ({ title, description, thumbnail }: ProjectProps) => {
  return (
    <div className="w-full md:w-[46%] lg:w-[30%] aspect-video rounded-3xl bg-slate-600">
      <img src={thumbnail} alt="thumbnail" />
      <div className="p-2">
        <span>{description}</span>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Project;
