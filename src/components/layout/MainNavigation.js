import classes from './MainNavigation.module.css';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
function MainNavigation() {
  const favouriteCtx = useContext(FavoritesContext)
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logo}>UK Green Gems Meetups</div>
        <nav>
      <ul>
      <li>
      <Link to = "/">All Meetups</Link>
      </li>
      <li>
      <Link to ="./newmeetups">New Meetups</Link>
      </li>
      <li>
      <Link to ="./favourites">Favourites
      <span className={classes.badge}>{favouriteCtx.totalFavorites}</span></Link>
      </li>
      </ul>
      </nav>
      </header>
    </div>
  )
}

export default MainNavigation
