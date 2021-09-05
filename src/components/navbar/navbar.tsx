import React, { useState } from 'react';
import { navigate } from 'gatsby';

import { FaTwitterSquare, FaLinkedin, FaHome, FaSearch } from 'react-icons/fa';
import { CgDarkMode } from 'react-icons/cg';

import { Bar, Logo, NavbarLink } from './Navbar.styles';
import { useNavbarQuery } from './Navbar.graph';
import { useBlog } from '../../context/context';
import { SearchContent } from '..';

function Navbar() {
  const { placeholderImage } = useNavbarQuery();
  const { changeTheme, isDark } = useBlog();
  const [searchView, setSearchView] = useState(false);

  return (
    <>
      <Bar
        isDark={isDark}
        leftChild={
          <div className="flex items-center">
            <Logo src={placeholderImage.publicURL} alt="Cereno logo" onClick={() => navigate('/')} />
            <div onClick={changeTheme} style={{ height: '12px', cursor: 'pointer' }}>
              <CgDarkMode size={19} />
            </div>
          </div>
        }
        rightChild={
          <>
            <FaSearch size={19} style={{ cursor: 'pointer' }} onClick={() => setSearchView(true)} />

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
      <SearchContent isDark={isDark} isVisble={searchView} onDismiss={() => setSearchView(false)} />
    </>
  );
}

export default React.memo(Navbar);
