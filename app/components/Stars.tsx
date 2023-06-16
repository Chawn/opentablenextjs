import React from 'react';
import fullStar from '../../public/icons/full-star.png';
import halfStar from '../../public/icons/half-star.png';
import emptyStar from '../../public/icons/empty-star.png';
import Image from 'next/image';
import { Review } from '@prisma/client';
import { calculateReviewRatingAverage } from '../../utils/calculateReviewRatingAverage';

type Props = {
	reviews: Review[];
	rating?: number;
};

export default function Stars({ reviews, rating }: Props) {
	const reviewRating = rating || calculateReviewRatingAverage(reviews);

	return (
		<div className='flex mr-5'>
			{/* rating star */}
			{[...Array(5)].map((_, i) => {
				if (reviewRating >= i + 1) {
					return <Image alt='' src={fullStar} className='w-4 h-4' />;
				} else if (reviewRating >= i + 0.5) {
					return <Image alt='' src={halfStar} className='w-4 h-4' />;
				} else {
					return <Image alt='' src={emptyStar} className='w-4 h-4' />;
				}
			})}
		</div>
	);
}
