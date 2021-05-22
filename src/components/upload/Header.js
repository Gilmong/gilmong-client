import React from 'react';
import ButtonBack from '../../assets/uploadpage/ButtonBack.svg';
import ButtonUpload from '../../assets/uploadpage/ButtonUpload.svg';
import Logo from '../../assets/uploadpage/Logo.svg';

const Header = () => {
    return (
        <div>
            <img className="header__button--back" src={ButtonBack} alt="" />
            <img className="header__logo" src={Logo} alt="" />
            <img className="header__button--upload" src={ButtonUpload} alt="" />
        </div>
    );
};

export default Header;