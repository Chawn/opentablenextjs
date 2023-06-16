import { Review } from '@prisma/client';
import React from 'react';
import ReviewCard from './ReviewCard';

type Props = {
	reviews: Review[]
};

export default function Reviews({reviews}: Props){
	return (
		<div>
			<h1 className='font-bold text-3xl mt-10 mb-7 borber-b pb-5'>
				What { reviews.length } {
					reviews.length === 1 ? 'person is' : 'people are'
				} saying
			</h1>
			<div>
				{
					reviews.map((review) => (
						<ReviewCard review={review} />
					))
				}
			</div>
		</div>
	);
};
