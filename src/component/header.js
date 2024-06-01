import React, { useState, useEffect } from 'react';
import { Icon } from './icon/icon';
import { DropDown } from './icon/icon';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const dropdownItems = [
    { id: 1, label: 'Dropdown Item 1', subItems: ['Sub Item 1.1', 'Sub Item 1.2', 'Sub Item 1.3'] },
    { id: 2, label: 'Dropdown Item 2', subItems: ['Sub Item 2.1', 'Sub Item 2.2', 'Sub Item 2.3'] },
    { id: 3, label: 'Dropdown Item 3', subItems: ['Sub Item 3.1', 'Sub Item 3.2', 'Sub Item 3.3'] }
  ];


  const handleDropdownItemClick = (item) => {
    setSelectedItem(selectedItem && selectedItem.id === item.id ? null : item);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <nav className={`navbar ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''}`}>
        <div className="navbar-tray">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#" className="navbar-link hover">
                Home
              </a>
            </li>
            {!isTablet && !isMobile && (
              <li className="navbar-item">
                <a href="#" className="navbar-link hover">
                  About
                </a>
              </li>
            )}
            <li className="navbar-item">
              {!isMobile && !isTablet && (
                <div>
                  <a href="#" className="navbar-link hindi">
                    <p>Swapnil</p>
                  </a>
                </div>
              )}
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link hover">
                Projects
              </a>
            </li>
            {!isTablet && !isMobile ? (
              <li className="navbar-item">
                <a href="#" className="navbar-link hover">
                  Contact
                </a>
              </li>
            ) : (
              <li className="navbar-item">
                <div onClick={toggleDropdown} className="navbar-link navbar-link-icon">
                  <Icon height={42} width={42} />
                </div>
                {isDropdownOpen && (
                  <div className="dropdown-menu">
                    {dropdownItems.map(item => (
                      <div key={item.id} className="dropdown-item-wrapper">
                        <a
                          href="#"
                          className="dropdown-item "
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDropdownItemClick(item);
                          }}
                        >
                          <div className='dropdown-item-text'>{item.label}</div>
                          <div className={`dropdown-item-icon ${selectedItem && selectedItem.id === item.id ? 'rotate-icon' : 'rotate-icon-again'}`}>
                            <DropDown height={45} width={45} />
                          </div>
                        </a>
                        {selectedItem && selectedItem.id === item.id && (
                          <div className="sub-dropdown-menu">
                            {item.subItems.map((subItem, index) => (
                              <a key={index} href="#" className="sub-dropdown-item">{subItem}</a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
