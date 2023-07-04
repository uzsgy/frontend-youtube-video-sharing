import React, { useState } from 'react';
import Videos from './videos/Videos';

const Home: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Videos />
    </div>
  );
};

export default Home;
