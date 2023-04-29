import React from 'react';
import Header from '../components/Header';
import RestaurantNavBar from '../components/RestaurantNavBar';
import Menu from '../components/Menu';

export const metadata = {
	title: 'Menu - OpenTable',
	description: 'Menu - OpenTable',
};

export default function RestaurantMenu() {
	return (
		<>
			<div className='bg-white w-[100%] rounded p-3 shadow'>
				<RestaurantNavBar />
				<Menu />
			</div>
		</>
	);
}
