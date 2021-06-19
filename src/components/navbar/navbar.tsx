import React, { useContext } from 'react';
import { navigate } from 'gatsby';

import { FaTwitterSquare, FaLinkedin, FaHome } from 'react-icons/fa';
import { BlogContext } from '../../utils/context/context';
import { Bar, Logo, NavbarLink } from './navbar.styles';
import { useNavbarQuery } from './Navbar.graph';
import { FaMoon, FaSun } from 'react-icons/fa';

export default () => {
  const { placeholderImage } = useNavbarQuery();
  const { changeTheme, isDark } = useContext(BlogContext);

  return (
    <Bar
      isDark={isDark}
      leftChild={
        <div className="flex items-center">
          <Logo src={placeholderImage.publicURL} alt="Cereno logo" onClick={() => navigate('/')} />
          <div onClick={changeTheme} style={{ height: '12px', cursor: 'pointer' }}>
            {isDark ? <FaSun /> : <FaMoon />}
          </div>
        </div>
      }
      rightChild={
        <>
          <NavbarLink isDark={isDark} href={`https://jesusbossa.dev/`} target="_blank">
            <FaHome />
          </NavbarLink>
          <NavbarLink isDark={isDark} href={`https://www.linkedin.com/in/makinox/`} target="_blank">
            <FaLinkedin />
          </NavbarLink>
          <NavbarLink isDark={isDark} href={`https://twitter.com/jesMakinox`} target="_blank">
            <FaTwitterSquare />
          </NavbarLink>
        </>
      }
    />
  );
};
