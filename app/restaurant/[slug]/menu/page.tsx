import React from 'react';
import Header from '../components/Header';
import RestaurantNavBar from '../components/RestaurantNavBar';
import Menu from '../components/Menu';
import { PrismaClient } from '@prisma/client';

export const metadata = {
	title: 'Menu - OpenTable',
	description: 'Menu - OpenTable',
};

const prisma = new PrismaClient();

const fetchRestaurantMenu = async (slug: string) => {
	const restaurant = await prisma.restaurant.findUnique({
		where: {
			slug: slug,
		},
		select: {
			items: true,
		},
	});

	if(!restaurant){
		throw new Error('Restaurant not found');
	}

	return restaurant.items;
}

type Props = {
	params: {
		slug: string;
	};
}
export default async function RestaurantMenu({params} : Props) {

	const menu = await fetchRestaurantMenu(params.slug);
	if(!menu){
		throw new Error('Menu not found');
	}
	return (
		<>
			<div className='bg-white w-[100%] rounded p-3 shadow'>
				<RestaurantNavBar slug={params.slug} />
				<Menu menu={menu} />
			</div>
		</>
	);
}
