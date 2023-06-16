import { Item } from '@prisma/client';
import React from 'react';
import MenuCard from './MenuCard';

type Props = {
	menu: Item[];
};

export default function Menu({menu}: Props) {


	return (
		<main className='bg-white mt-5'>
			<div>
				<div className='mt-4 pb-1 mb-1'>
					<h1 className='font-bold text-4xl'>Menu</h1>
				</div>
				<div className='flex flex-wrap justify-between'>
					{
						menu.length ? (
							menu.map((item) => {
								return <MenuCard key={item.id} item={item} />
							})
						) : (
						 <div className="flex flex-wrap justify-between">
							<p>This restaurant does not have a menu</p>
						 </div>
						)
					}
				</div>
			</div>
		</main>
	);
}
