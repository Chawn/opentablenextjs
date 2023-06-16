import React from 'react';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import Header from './components/Header';
import SearchSidebar from './components/SearchSidebar';
// import RestaurantCard from '../components/RestaurantCard';
import RestaurantCard from './components/RestaurantCard';
import { PrismaClient, Location, Cuisine, PRICE, Review } from '@prisma/client';

export const metadata = {
  title: 'Search - OpenTable',
}

const prisma = new PrismaClient();

export interface RestaurantCardType {
	id: number,
	name: string,
	main_image: string,
	cuisine: Cuisine,
	slug: string,
	location: Location,
	price: PRICE
	reviews:  Review[]
}

type searchParamsType = {
	city?: string,
	cuisine?: string,
	price?: PRICE
}

const fetchRestaurantByFilter = async (searchParams: searchParamsType): Promise<RestaurantCardType[]> => {
	const where:any  = {}

	if(searchParams.city) {
		where.location = {
			name: {
				contains: searchParams.city.toLowerCase()
			}
		}
	}

	if(searchParams.cuisine) {
		where.cuisine = {
			name: {
				equals: searchParams.cuisine.toLowerCase()
			}
		}
	}

	if(searchParams.price) {
		where.price = {
			equals: searchParams.price.toLowerCase()
		}
	}

	const select = {
			id: true,
			name: true,
			main_image: true,
			price: true,
			cuisine: true,
			location: true,
			slug: true,
			reviews: true
	}
	
	if(!searchParams) return prisma.restaurant.findMany({select});

	const restaurants = await prisma.restaurant.findMany({
		where,
		select,
	});
	
	return restaurants;
};

const fetchLocations = async () => {
	return prisma.location.findMany();
}

const fetchCuisines = async () => {
	return prisma.cuisine.findMany();
}


type Props = {
	searchParams: {
		city?: string;
		cuisine?: string;
		price?: PRICE;
	};
};

export default async function Search({searchParams}: Props) {
	const restaurants = await fetchRestaurantByFilter(searchParams);
	const locations = await fetchLocations();
	const cuisines = await fetchCuisines();
	
	console.log('searchParams', searchParams)

	return (
		<>
			<Header />
			<div className='flex py-4 m-auto w-2/3 justify-between items-start'>
				<SearchSidebar
					locations={locations}
					cuisines={cuisines}
					searchParams={searchParams}
				/>
				<div className='w-5/6'>
					{/* {
						restaurants.map((restaurant) => (
							<RestaurantCard key={restaurant.id} restaurant={restaurant} />
						))
					} */}
					{
						restaurants.length ? (
							restaurants.map((restaurant, index) => (
								<RestaurantCard key={index} restaurant={restaurant} />
							))
						) : (
							<p>Sorry, we found no restaurants in this area </p>
						)
					}
				</div>
			</div>
		</>
	);
}
