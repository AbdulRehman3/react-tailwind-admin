import clsx from 'clsx';
import { ReactComponent as HamburgerIcon } from '../../assets/icons/hamburger-cut.svg';

export const AdminHeader = ({ sidebarCollapsed, onToggleSidebar }) => {
	return (
		<nav
			className={clsx(
				'flex flex-row flex-nowrap items-center justify-between',
				'z-10 fixed mt-0 py-1 px-6 bg-white shadow-sm transition-all duration-500 ease-in-out',
				'w-full',
				sidebarCollapsed
					? '2md:w-[calc(100%-72px)]'
					: '2md:w-[calc(100%-256px)]'
			)}
		>
			<button
				className='focus:outline-none focus:ring-0'
				onClick={onToggleSidebar}
			>
				<HamburgerIcon className='w-8 h-8' />
			</button>
			<ul className='flex :ml-auto mt-2'>
				<li className='relative'>
					<button className='py-3 px-4 flex text-sm rounded-full focus:outline-none'>
						<div className='relative inline-block'>
							<div className='relative inline-block'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 16 16'
									width='1em'
									height='1em'
									fill='currentColor'
									className='w-6 h-6'
								>
									<path d='M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z'></path>
								</svg>
								<span className='flex justify-center absolute -top-2 :-right-1 text-center bg-pink-500 px-1 text-white rounded-full text-xs'>
									<span className='align-self-center'>2</span>
								</span>
							</div>
						</div>
					</button>
				</li>
				<li className='relative'>
					<button className='px-3 flex text-sm rounded-full focus:outline-none'>
						<div className='relative'>
							<img
								className='h-10 w-10 rounded-full border border-gray-700 bg-gray-700'
								src='https://randomuser.me/api/portraits/women/63.jpg'
								alt='Ari budin'
							/>
						</div>
					</button>
				</li>
			</ul>
		</nav>
	);
};
