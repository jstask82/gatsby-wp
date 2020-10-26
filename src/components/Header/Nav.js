import React, { useState, useRef, createRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

export default function Nav({ css, navClass, navAnchors }) {
  //Generate nav li items
  // menu state and toggle handler
  const [menuVisible, setMenuVisible] = useState(false);
  const arrLength = navAnchors ? navAnchors.length : 0;
  const [navRefs, setNavRefs] = React.useState([]);
  const ref = useRef();

  useEffect(() => {
    // add or remove refs
    setNavRefs((navRefs) =>
      Array(arrLength)
        .fill()
        .map((_, i) => navRefs[i] || createRef())
    );
  }, [arrLength]);

  const handleNavBtnKeypress = (e) => {
    if (e.key === 'Enter') {
      //ref.current.handleClick(ref.current)
      ref.current.click();
    }
  };
  const handleNavKeypress = (e, i) => {
    if (e.key === 'Enter') {
      navRefs[i].current.handleClick(navRefs[i].current);
    }
  };

  const toggleMenuHandle = () => {
    //toogle only if hamburger menu is present
    const width = window.matchMedia(`(min-width: ${css.desktopMenuBp})`);
    if (!width.matches) {
      setMenuVisible(() => !menuVisible);
      document.body.classList.toggle('stop-scroll');
    }
  };

  if (navAnchors) {
    return (
      <React.Fragment>
        <div
          className={css['navigation__button--outer']}
          tabIndex="0"
          onClick={toggleMenuHandle}
          onKeyPress={handleNavBtnKeypress}
          ref={ref}
        >
          <div
            tabIndex="-1"
            className={
              menuVisible
                ? css.navigation__button + ' ' + css['navigation__button--active']
                : css.navigation__button
            }
          >
            <span className={css.navigation__icon}>&nbsp;</span>
          </div>
        </div>
        <nav className={menuVisible ? navClass + ' ' + css['navigation--visible'] : navClass}>
          <ul className={css.navigation__list}>
            {navAnchors.map((anchor, i) => (
              <li className={css['navigation__list-item']} key={anchor.id}>
                <Link
                  activeClass={css.active}
                  className={css['navigation__list-link']}
                  to={anchor.id}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  tabIndex="0"
                  onClick={toggleMenuHandle}
                  onKeyPress={(e) => {
                    handleNavKeypress(e, i);
                  }}
                  ref={navRefs[i]}
                >
                  {anchor.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div
        className={css['navigation__button--outer']}
        tabIndex="0"
        onClick={toggleMenuHandle}
        onKeyPress={handleNavBtnKeypress}
        ref={ref}
      >
        <div
          tabIndex="-1"
          className={
            menuVisible
              ? css.navigation__button + ' ' + css['navigation__button--active']
              : css.navigation__button
          }
        >
          <span className={css.navigation__icon}>&nbsp;</span>
        </div>
      </div>
      <nav className={menuVisible ? navClass + ' ' + css['navigation--visible'] : navClass}>
        <ul className={css.navigation__list}>
          <li className={css['navigation__list-item']}>
            <NavLink className={css['navigation__list-link']} to="/" onClick={toggleMenuHandle}>
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}
