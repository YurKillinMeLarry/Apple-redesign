import { UserIcon, ShoppingBagIcon, SearchIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



function Header() {
	const session = false
	return (
		<header className='sticky top-0 z-30 flex items-center justify-center w-full p-4 bg-AppleGlass'>
			<div className='flex items-center justify-center md:w-1/5'>
				<Link href='/'>
					<div className='relative w-5 h-10 transition opacity-75 cursor-pointer hover:opacity-100'>
						<Image
							src='https://rb.gy/vsvv2o'
							alt=''
							layout='fill'
							objectFit='contain'
						/>
					</div>
				</Link>
			</div>
			<div className='items-center justify-center flex-1 hidden space-x-8 md:flex'>
				<a className='headerLink'>Product</a>
				<a className='headerLink'>Explore</a>
				<a className='headerLink'>Support</a>
				<a className='headerLink'>Business</a>
			</div>
			<div className='flex items-center justify-center gap-x-4 md:w-1/5'>
				<SearchIcon className='headerIcon' />
				<Link href='/checkout'>
				<div className='relative cursor-poiner'>	
				<span className='absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-AppleBlue to-violet-500 text-[10px] text-white'>5
					</span>
					<ShoppingBagIcon className='headerIcon' />
				</div>
			</Link>
			{session ? (
				<Image src={
					// session.user?.image ||
					"https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
				}
				alt=''
				className='cursor-pointer rounded-full'
				width={34}
				height={34}
				
				/>
			)	: (
				<UserIcon className='headerIcon' />	
			)}
			
			</div>
		</header>
	)
}

export default Header
