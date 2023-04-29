import Link from 'next/link';
import React from 'react';
import NavBar from '../../components/NavBar';
import Header from './components/Header';
import Form from './components/Form';

export const metadata = {
	title: 'Reserve - OpenTable',
};


type Props = {};

const Reserve = (props: Props) => {
	return (
		<>
			<div className='border-t h-screen'>
				<div className='py-9 w-3/5 m-auto'>
					<Header />
					<Form />
				</div>
			</div>
		</>
	);
};

export default Reserve;
