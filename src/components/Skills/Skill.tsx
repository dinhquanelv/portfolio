interface SkillProps {
  lightIcon: string;
  darkIcon: string;
  title: string;
  skills: string[];
}

const Skill = ({ lightIcon, darkIcon, title, skills }: SkillProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-[420px] mb-16 md:mb-0">
      <div className="mb-8">
        <div className="bg-dark w-20 h-20 rounded-full  flex justify-center items-center dark:hidden">
          <img src={lightIcon} alt="skill" className="w-10 h-10" />
        </div>
        <div className="bg-light w-20 h-20 rounded-full  hidden justify-center items-center dark:flex">
          <img src={darkIcon} alt="skill" className="w-10 h-10" />
        </div>
      </div>
      <h3 className="text-lg font-bold mb-6">{title}</h3>
      <div>
        {skills.map((skill) => (
          <p key={skill} className="text-center mb-4">
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Skill;
