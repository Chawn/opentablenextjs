import Link from 'next/link';
import React from 'react';
import Price from '../../components/Price';
import { Cuisine, PRICE, Review, Location } from '@prisma/client';
import Stars from '../../components/Stars';
import { calculateReviewRatingAverage } from '../../../utils/calculateReviewRatingAverage';
interface RestaurantCardType {
	id: number,
	name: string,
	main_image: string,
	cuisine: Cuisine,
	slug: string,
	location: Location,
	price: PRICE
	reviews: Review[]
}

const RestaurantCard = ({restaurant}: {restaurant:RestaurantCardType}) => {
	// console.log('(card) restaurant', restaurant)

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
		// <Link href={`/restaurant/${restaurant.slug}`}>
			<div className='border-b flex pb-5'>
				<img
					src={ restaurant.main_image }
					alt=''
					className='w-44 h-36 rounded'
				/>
				<div className='pl-5'>
					<h2 className='text-3xl'>{ restaurant.name }</h2>
					<div className='flex items-start'>
						<div className='flex mb-2'>
							<Stars reviews={restaurant.reviews} />
						</div>
						<p className='ml-2 text-sm'>
              {
                renderRatingText()
              }
            </p>
					</div>
					<div className='mb-9'>
						<div className='font-light flex text-reg'>
							<Price price={restaurant.price} />
							<p className='mr-4 capitalize'>{restaurant.cuisine.name}</p>
							<p className='mr-4 capitalize'>{restaurant.location.name}</p>
						</div>
					</div>
					<div className='text-red-600'>
						<Link href={`/restaurant/${restaurant.slug}`}>
							View more information
						</Link>
					</div>
				</div>
			</div>
		// </Link>
	);
};

export default RestaurantCard;
