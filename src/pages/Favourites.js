import React from 'react'
import { useContext } from 'react'
import FavoritesContext from '../store/favorites-context'
import Meetuplist from '../components/meetups/Meetuplist'

function Favourites() {
const favouriteCtx = useContext(FavoritesContext)
let content;
if (favouriteCtx.totalFavorites === 0) {
  content = <p className='text'> You have got no favourites yet, Start adding some?</p>
} else {
  content = <Meetuplist meetups={favouriteCtx.favorites}/>
}
  return (
    <secion>

    {content}
    </secion>
   
  )
}

export default Favourites
