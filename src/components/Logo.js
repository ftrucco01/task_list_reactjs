
import React from "react";
import freecodeCampLogo from '../img/freecodecamp-logo.png';

function Logo()
{
    return (
        <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freecodeCampLogo}
          alt='Logo de freeCodeCamp'/>
      </div>
    );
}

export default Logo;