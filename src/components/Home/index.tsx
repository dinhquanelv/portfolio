import Title from '@/components/Title';

import { Element } from 'react-scroll';

const Home = () => {
  return (
    <Element name="home">
      <div className="py-24">
        <Title title="portfolio." description="VO NGUYEN DINH QUAN" />
      </div>
    </Element>
  );
};

export default Home;
