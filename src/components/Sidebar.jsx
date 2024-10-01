import React, { useState } from 'react';
import '../styles/sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={`toggle-btn ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        {isOpen ? '✖' : '☰'}
      </button>
      
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        {isOpen && (
          <div className="sidebar-content">
            <h2 className="sidebar-title">Sidebar Content</h2>
            <ul className="sidebar-list">
              <li className="sidebar-item">Item 1</li>
              <li className="sidebar-item">Item 2</li>
              <li className="sidebar-item">Item 3</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
