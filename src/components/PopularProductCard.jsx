import React from 'react';
import { star } from '../assets/icons';

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className='relative flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[280px] h-[280px]' />

      <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} alt='rating' width={24} height={24} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          ({(Math.random() * (5 - 0.1) + 0.1).toFixed(1)})
        </p>
      </div>

      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {name}
      </h3>
      <p className='mt-2 text-2xl font-semibold font-montserrat leading-normal text-coral-red'>
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
