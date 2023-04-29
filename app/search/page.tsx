import React from 'react';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import Header from './components/Header';
import Sidebar from './components/SearchSidebar';
import RestaurantCard from './components/RestaurantCard';

export const metadata = {
  title: 'Search - OpenTable',
}

type Props = {};

export default function SearchPage({}: Props) {
	return (
		<>
			<Header />
			<div className='flex py-4 m-auto w-2/3 justify-between items-start'>
				<Sidebar />
				<div className='w-5/6'>
					<RestaurantCard />
				</div>
			</div>
		</>
	);
}
