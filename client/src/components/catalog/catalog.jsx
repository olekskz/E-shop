import React from 'react';
import { Link } from 'react-router-dom';
import './catalog.css';

const Catalog = () => {
  return (
    <div class="catalog">
        <ul className='catalog-ul'>
            <li className='catalog-li'><Link className='catalog-a' to="#">Phones</Link></li>
            <li className='catalog-li'><Link className='catalog-a' to="#">Notebooks</Link></li>
            <li className='catalog-li'><Link className='catalog-a' to="#">Tablets</Link></li>
            <li className='catalog-li'><Link className='catalog-a' to="#">Smart watch</Link></li>
            <li className='catalog-li'><Link className='catalog-a' to="#">Monitors</Link></li>
            <li className='catalog-li'><Link className='catalog-a' to="#">GPU</Link></li>
            <li className='catalog-li'><Link className='catalog-a' to="#">CPU</Link></li>
            <li className='catalog-li'><Link className='catalog-a' to="#">Keyboards</Link></li>
            <li className='catalog-li'><Link className='catalog-a' to="#">RAM</Link></li>
            <li className='catalog-li'><Link className='catalog-a' to="#">Accesories</Link></li>
            <li className='catalog-li'><Link className='catalog-a' to="#">Powerbanks</Link></li>
        </ul>
    </div>
  );
}

export default Catalog;