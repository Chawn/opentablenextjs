import React from 'react';
import { Review } from '@prisma/client';
import { calculateReviewRatingAverage } from '../../../../utils/calculateReviewRatingAverage';
import Stars from '../../../components/Stars';

type Props = {
	reviews: Review[]
};

export default function Rating({reviews}: Props) {
	console.log(reviews)
	return (
		<div className='flex items-end'>
			<div className='ratings mt-2 flex items-center'>
				<p className="flex">
					<Stars reviews={ reviews } />
				</p>
				<p className='text-reg ml-3'>
					{ calculateReviewRatingAverage(reviews).toFixed(1) }
				</p>
			</div>
			<div>
				<p className='text-reg ml-4'>{ reviews.length } Review{ reviews.length === 1 ? '' : 's' }</p>
			</div>
		</div>
	);
}
