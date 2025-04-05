interface TitleProps {
  title: string;
  description: string;
}

const Title = ({ title, description }: TitleProps) => {
  return (
    <section id="home" className="h-[512px] flex justify-center items-center">
      <div className="relative inline-block select-none">
        <span className="text-9xl text-center font-medium lowercase">{title}.</span>
        <span className="absolute -bottom-4 right-0 text-lg uppercase">{description}</span>
      </div>
    </section>
  );
};

export default Title;
