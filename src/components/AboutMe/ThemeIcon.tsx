interface ThemeIconProps {
  light: string;
  dark: string;
  alt: string;
}

const ThemeIcon = ({ light, dark, alt }: ThemeIconProps) => {
  return (
    <>
      <img src={light} alt={alt} className="w-5 h-5 block dark:hidden" />
      <img src={dark} alt={alt} className="w-5 h-5 hidden dark:block" />
    </>
  );
};

export default ThemeIcon;
