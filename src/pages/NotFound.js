import errorPicture from '../images/pngegg.png';
import React from 'react';

const MissingPage = () => {
  return (
    <div>
      <img src={errorPicture} alt={'page unAvailable'}></img>
    </div>
  );
};

export default MissingPage;
