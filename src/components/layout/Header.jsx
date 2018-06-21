// npm libs
import React from 'react';
import { Link } from 'react-router-dom';

// routing
import { routes } from 'routing';

// theme
import createStylesheet from 'styles/createStylesheet';

const styles = createStylesheet(theme => ({
  container: {
    alignItems: 'center',
    backgroundColor: theme.color.backgroundSecondary[100],
    color: theme.color.textSecondary,
    display: 'flex',
    flex: 0,
    minHeight: theme.headerHeight,
    padding: `0 ${theme.spacing.medium}px`,
  },
  menuItem: {
    display: 'inline-block',
    margin: `0 ${theme.spacing.base}px`,
  },
}));

const Header = () => (
  <header style={styles.container}>
    Header
    <nav>
      <ul>
        <li style={styles.menuItem}>
          <Link to={routes.HOME}>Home</Link>
        </li>
        <li style={styles.menuItem}>
          <Link to={routes.ABOUT}>About</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;