interface ProjectProps {
  title: string;
  link: string;
  description: string;
  thumbnail: string;
}

const Project = ({ title, link, description, thumbnail }: ProjectProps) => {
  return (
    <div className="relative w-[95%] md:w-[46%] lg:w-[30%] aspect-video rounded-3xl overflow-hidden bg-slate-600 group">
      <img
        src={thumbnail}
        alt="thumbnail"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div
        className="absolute inset-0 flex flex-col justify-between items-center p-4 xl:p-8
      text-whiteText bg-[#002f5f] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      >
        <p className="text-center text-lg font-medium">{description}</p>
        <button
          className="w-36 h-12 p-2 border border-primaryColor rounded-full outline-none 
        font-semibold hover:bg-primaryColor transition-colors duration-300"
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </button>
      </div>
    </div>
  );
};

export default Project;
