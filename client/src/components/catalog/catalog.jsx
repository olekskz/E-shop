import React from 'react';
import { Link } from 'react-router-dom';
import './catalog.css';

const Catalog = ({ onCategorySelect }) => { 
  return (
    <div className="catalog">
        <ul className='catalog-ul'>
            <li className='catalog-li' onClick={(e) => {
                    e.preventDefault();
                    onCategorySelect('all');
                }}>
                <Link className='catalog-a'>All Products</Link>
            </li>
            <li className='catalog-li'   onClick={(e) => {
                    e.preventDefault();
                    onCategorySelect('phones');
                }}>
                <Link className='catalog-a'>Phones</Link>
            </li>
            <li className='catalog-li' onClick={(e) => {
                    e.preventDefault();
                    onCategorySelect('notebooks');
                }}>
                <Link className='catalog-a'>Notebooks</Link>
            </li>
            <li className='catalog-li' onClick={(e) => {
                    e.preventDefault();
                    onCategorySelect('tablets');
                }}>
                <Link className='catalog-a'>Tablets</Link>
            </li>
            <li className='catalog-li' onClick={(e) => {
                    e.preventDefault();
                    onCategorySelect('smartwatch');
                }}>
                <Link className='catalog-a'>Smart watch</Link>
            </li>
            <li className='catalog-li' onClick={(e) => {
                    e.preventDefault();
                    onCategorySelect('monitors');
                }}>
                <Link className='catalog-a'>Monitors</Link>
            </li>
            <li className='catalog-li' onClick={(e) => {
                    e.preventDefault();
                    onCategorySelect('gpu');
                }}>
                <Link className='catalog-a'>GPU</Link>
            </li>
            <li className='catalog-li' onClick={(e) => {
                    e.preventDefault();
                    onCategorySelect('cpu');
                }}>
                <Link className='catalog-a'>CPU</Link>
            </li>
            <li className='catalog-li' onClick={(e) => {
                    e.preventDefault();
                    onCategorySelect('keyboards');
                }}>
                <Link className='catalog-a'>Keyboards</Link>
            </li>
            <li className='catalog-li' onClick={(e) => {
                    e.preventDefault();
                    onCategorySelect('ram');
                }}>
                <Link className='catalog-a'>RAM</Link>
            </li>
            <li className='catalog-li' onClick={(e) => {
                    e.preventDefault();
                    onCategorySelect('accesories');
                }}>
                <Link className='catalog-a'>Accesories</Link>
            </li>
            <li className='catalog-li' onClick={(e) => {
                    e.preventDefault();
                    onCategorySelect('powerbanks');
                }}>
                <Link className='catalog-a'>Powerbanks</Link>
            </li>
        </ul>
    </div>
  );
}


export default Catalog;