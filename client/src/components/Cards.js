import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Learn More About Kathakali</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='History of Kathakali'
              label='History'
              path='/about'
            />
            <CardItem
              src='images/img-2.jpg'
              text='The Types of Kathakali Characters'
              label='Characters'
              path='/about'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='The Acting'
              label='Acting'
              path='/about'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Different Types of Kathakali Instruments'
              label='Instruments'
              path='/demo'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Different Types of Kathakali Hand Gestures'
              label='Hand Gestures'
              path='/demo'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
