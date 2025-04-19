interface TitleProps {
  title: string;
  description: string;
}

const Title = ({ title, description }: TitleProps) => {
  return (
    <section id="home" className="h-[768px] flex justify-center items-center">
      <div className="relative inline-block select-none">
        <span className="text-center font-medium text-7xl md:text-9xl lowercase">{title}</span>
        <span className="absolute -bottom-3 md:-bottom-4 right-0 text-xs md:text-lg uppercase">{description}</span>
      </div>
    </section>
  );
};

export default Title;
