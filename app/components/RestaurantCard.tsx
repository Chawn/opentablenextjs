import Link from 'next/link'
import React from 'react'
import ReservationCard from '../restaurant/[slug]/components/ReservationCard';
import { RestaurantCardType } from '../page';
import Price from './Price';
import { calculateReviewRatingAverage } from '../../utils/calculateReviewRatingAverage';
import Stars from './Stars';

type Props = {
  restaurant: RestaurantCardType;
}

const RestaurantCard = ({restaurant}: Props) => {

  const renderRatingText = () => {
    const rating = calculateReviewRatingAverage(restaurant.reviews)
    if (!rating) return 'No reviews'
		if (rating >= 4) {
			return 'Good'
		} else if (rating >= 3) {
			return 'Average'
		} else if (rating >= 2) {
			return 'Fair'
		} else if (rating >= 1) {
			return 'Poor'
		} else if (rating > 0) {
			return 'Very Poor'
		} else if (rating == 0) {
			return 'No reviews'
		}
  }
  return (
    <div className='w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer'>
      <Link href={`/restaurant/${restaurant.slug}`}>
        <img
          src={restaurant.main_image}
          alt=''
          className='w-full h-36'
        />
        <div className='p-1'>
          <h3 className='font-bold text-2xl mb-2'>{ restaurant.name }</h3>
          <div className='flex items-start'>
            <div className='flex mb-2'>
              <Stars reviews={restaurant.reviews} />
            </div>
            <p className='ml-2'>
              { restaurant.reviews.length } review{
              restaurant.reviews.length === 1 ? '' : 's'
            }</p>
            <p>
              {
                renderRatingText()
              }
            </p>
          </div>
          <div className='flex text-reg font-light capitalize'>
            <p className=' mr-3'>{ restaurant.cuisine.name }</p>
            <Price price={restaurant.price} />
            <p>{ restaurant.location.name }</p>
          </div>
          <p className='text-sm mt-1 font-bold'>Booked 3 times today</p>
        </div>
      </Link>
    </div>
  )
}

export default RestaurantCard