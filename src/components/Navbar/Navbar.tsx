import React, { useState } from 'react';
import { navigate } from 'gatsby';

import { FaTwitterSquare, FaLinkedin, FaHome, FaSearch } from 'react-icons/fa';
import { CgDarkMode } from 'react-icons/cg';

import { Bar, Logo, NavbarLink } from './Navbar.styles';
import { useNavbarQuery } from './Navbar.graph';
import { useBlog } from '../../context/context';
import { SearchContent } from '..';
import { TopBar, FluidContainer } from '@makinox/makinox-ui';

function Navbar() {
  const { placeholderImage } = useNavbarQuery();
  const { changeTheme, isDark } = useBlog();
  const [searchView, setSearchView] = useState(false);

  return (
    <>
      <nav className={TopBar({ isDark })}>
        <Bar isDark={isDark} className={`flex justify-between items-center ${FluidContainer()}`}>
          <div className="flex items-center">
            <Logo src={placeholderImage.publicURL} alt="Cereno logo" onClick={() => navigate('/')} />
            <div onClick={changeTheme} style={{ height: '12px', cursor: 'pointer' }}>
              <CgDarkMode size={19} />
            </div>
          </div>
          <div className="flex items-center" style={{ paddingTop: 7, marginRight: 5, marginBottom: -6 }}>
            <FaSearch
              className="navbar-search"
              size={18}
              style={{ cursor: 'pointer', marginBottom: 5, marginRight: 2 }}
              onClick={() => setSearchView(true)}
            />

            <NavbarLink isDark={isDark} href={`https://jesusbossa.dev/`} target="_blank">
              <FaHome />
            </NavbarLink>
            <NavbarLink isDark={isDark} href={`https://www.linkedin.com/in/makinox/`} target="_blank">
              <FaLinkedin />
            </NavbarLink>
            <NavbarLink isDark={isDark} href={`https://twitter.com/jesMakinox`} target="_blank">
              <FaTwitterSquare />
            </NavbarLink>
          </div>
        </Bar>
      </nav>
      <SearchContent isDark={isDark} isVisble={searchView} onDismiss={() => setSearchView(false)} />
    </>
  );
}

export default React.memo(Navbar);
