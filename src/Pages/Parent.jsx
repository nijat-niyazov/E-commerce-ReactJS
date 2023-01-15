import { useEffect, useState } from 'react';

export const Parent = () => {
  const [activePage, setActivePage] = useState('page1');
  const [imageSrc, setImageSrc] = useState(
    'https://cdn.theatlantic.com/thumbor/0jPGepNCkAs1qO4RS686VP5BGTE=/0x0:4800x2700/1600x900/media/img/mt/2022/09/avatar_rerelease_2/original.jpg'
  );

  const handleClick = () => {
    setImageSrc(
      'https://i0.wp.com/fugitives.com/wp-content/uploads/2022/12/Avatar-Ending-Explained-2009-Fantasy-Thriller-Film.jpg'
    );
  };

  return (
    <div>
      <img
        src={imageSrc}
        style={{
          width: '200px',
          height: '200px',

          transition: 'opacity 2.5s ease-in-out',
        }}
        alt="image"
      />
      <button onClick={handleClick}>Change Image</button>
    </div>
  );
};
