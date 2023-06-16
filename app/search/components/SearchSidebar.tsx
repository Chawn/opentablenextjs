import { Cuisine, Location, PRICE } from '@prisma/client';
import React from 'react';
import Link from 'next/link';
import Price from '../../components/Price';

type Props = {
	locations: Location[];
	cuisines: Cuisine[];
	searchParams: {
		city?: string
		cuisine?: string
		price?:PRICE
	};
};

const SearchSidebar = ({ locations, cuisines, searchParams }: Props) => {
	// console.log('SearchParams', searchParams)
	searchParams.city = searchParams.city?.toLowerCase();
	searchParams.cuisine = searchParams.cuisine?.toLowerCase();

	const prices = [
		{
			name: PRICE.CHEAP,
			label: '$$',
			className: 'hover:bg-slate-100 border w-full text-reg rounded-l p-2'
		},
		{
			name: PRICE.REGULAR,
			label: '$$$',
			className: 'hover:bg-slate-100 border-r border-t border-b w-full text-reg p-2'
		},
		{
			name: PRICE.EXPENSIVE,
			label: '$$$$',
			className: 'hover:bg-slate-100 border-r border-t border-b w-full text-reg rounded-r p-2'
		},
	]
	return (
		<div className='w-1/5'>
			<div className='border-b pb-4'>
				<h1 className='mb-2 font-bold text-gray-600'>Region</h1>
				{locations.map((location, index) => (
					<p 
						key={index} 
						className={`${
							searchParams.city === location.name  ? 'font-semibold ' : 'font-light'
						} text-reg capitalize`}
					>
						<Link
							href={{
								pathname: '/search',
								query: { ...searchParams, city: location.name },
							}}
							
						>
							{location.name}
						</Link>
						{/* <a href={`/search?city=${location.name}`} key={index} >{location.name}</a> */}
					</p>
				))}
			</div>
			<div className='border-b pb-4 mt-3'>
				<h1 className='mb-2 font-bold text-gray-600'>Cuisine</h1>
				{cuisines.map((cuisine, index) => (
					<p 
						key={index}
						className={`${
							searchParams.cuisine === cuisine.name  ? 'font-semibold ' : 'font-light'
						} text-reg capitalize`}
					>
						<Link
							href={{
								pathname: '/search',
								query: { ...searchParams, cuisine: cuisine.name },
							}}
						>
							{cuisine.name}
						</Link>
					</p>
				))}
			</div>
			<div className='mt-3 pb-4'>
				<h1 className='mb-2'>Price</h1>
				<div className="flex">
					{
						prices.map(({name, label, className}, index) => (
							<p className='font-light text-reg' key={index}>
								<Link
									href={{
										pathname: '/search',
										query: { ...searchParams, price: name},
									}}
									className={`
									${className} 
									${
										searchParams.price === name ? 'font-semibold bg-slate-100' : 'font-light'
									}`}
								>
									{ label }
								</Link>
							</p>
						))
					}
				</div>
			</div>
		</div>
	);
};

export default SearchSidebar;
