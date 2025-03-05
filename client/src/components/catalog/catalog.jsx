import React from 'react';
import { Link } from 'react-router-dom';
import './catalog.css';

const Catalog = ({ onCategorySelect }) => { 
  return (
    <div className="catalog">
        <ul className='catalog-ul'>
            <li className='catalog-li'>
                <Link className='catalog-a'  onClick={(e) => {
                    e.preventDefault();
                    onCategorySelect('all');
                }}>All Products</Link>
            </li>
            <li className='catalog-li'>
                <Link className='catalog-a'  onClick={(e) => {
                    e.preventDefault();
                    onCategorySelect('phones');
                }}>Phones</Link>
            </li>
            <li className='catalog-li'>
                <Link className='catalog-a'  onClick={(e) => {
                    e.preventDefault();
                    onCategorySelect('notebooks');
                }}>Notebooks</Link>
            </li>
            <li className='catalog-li'>
                <Link className='catalog-a'  onClick={(e) => {
                    e.preventDefault();
                    onCategorySelect('tablets');
                }}>Tablets</Link>
            </li>
            <li className='catalog-li'>
                <Link className='catalog-a'  onClick={(e) => {
                    e.preventDefault();
                    onCategorySelect('smartwatch');
                }}>Smart watch</Link>
            </li>
            <li className='catalog-li'>
                <Link className='catalog-a'  onClick={(e) => {
                    e.preventDefault();
                    onCategorySelect('monitors');
                }}>Monitors</Link>
            </li>
            <li className='catalog-li'>
                <Link className='catalog-a'  onClick={(e) => {
                    e.preventDefault();
                    onCategorySelect('gpu');
                }}>GPU</Link>
            </li>
            <li className='catalog-li'>
                <Link className='catalog-a'  onClick={(e) => {
                    e.preventDefault();
                    onCategorySelect('cpu');
                }}>CPU</Link>
            </li>
            <li className='catalog-li'>
                <Link className='catalog-a'  onClick={(e) => {
                    e.preventDefault();
                    onCategorySelect('keyboards');
                }}>Keyboards</Link>
            </li>
            <li className='catalog-li'>
                <Link className='catalog-a'  onClick={(e) => {
                    e.preventDefault();
                    onCategorySelect('ram');
                }}>RAM</Link>
            </li>
            <li className='catalog-li'>
                <Link className='catalog-a' onClick={(e) => {
                    e.preventDefault();
                    onCategorySelect('accesories');
                }}>Accesories</Link>
            </li>
            <li className='catalog-li'>
                <Link className='catalog-a'  onClick={(e) => {
                    e.preventDefault();
                    onCategorySelect('powerbanks');
                }}>Powerbanks</Link>
            </li>
        </ul>
    </div>
  );
}


export default Catalog;