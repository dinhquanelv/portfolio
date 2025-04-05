import logoDark from '@/assets/dqelv-logo-dark.png';
import logoLight from '@/assets/dqelv-logo-light.png';

const Logo = () => {
  return (
    <div className="h-[56px] w-[80px] relative">
      <img
        className="absolute inset-0 h-[56px] w-[80px] hover:cursor-pointer opacity-100 dark:opacity-0"
        src={logoDark}
        alt="logo"
      />
      <img
        className="absolute inset-0 h-[56px] w-[80px] hover:cursor-pointer opacity-0 dark:opacity-100"
        src={logoLight}
        alt="logo"
      />
    </div>
  );
};

export default Logo;
