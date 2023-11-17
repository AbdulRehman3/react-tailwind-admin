import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import sidebarLinks from './sidebarLinks';

import { ReactComponent as HamburgerIcon } from '../../assets/icons/hamburger-full.svg';

export const AdminSidebar = ({ sidebarCollapsed, onToggleSidebar }) => {
	return (
		<nav
			className={clsx(
				'fixed z-20 transition-all duration-500 ease-in-out h-screen shadow-sm',
				sidebarCollapsed ? 'w-18 -ml-[72px] 2md:ml-0' : 'w-64'
			)}
		>
			<div className='h-full bg-white overflow-y-auto'>
				<div
					className={clsx(
						'flex items-center justify-center font-semibold py-5'
					)}
				>
					{sidebarCollapsed ? (
						<h2 className='font-semibold text-primary hidden 2md:flex'>
							Admin
						</h2>
					) : (
						<h2 className='text-2xl text-primary px-4 max-h-9'>React Admin</h2>
					)}
					<button className='2md:hidden' onClick={onToggleSidebar}>
						<HamburgerIcon className='w-8 h-8' />
					</button>
				</div>
				<ul className='w-full flex flex-col font-medium'>
					{sidebarLinks.map((sidebarLinkItem) => (
						<li key={sidebarLinkItem.key}>
							<NavLink
								to={sidebarLinkItem.link}
								className={({ isActive }) =>
									clsx({
										'block py-2.5 px-6 hover:text-primary': true,
										'text-primary': isActive,
									})
								}
							>
								<span className='flex items-center'>
									<sidebarLinkItem.icon className='h-6 w-6 shrink-0' />
									{!sidebarCollapsed && (
										<span className='ml-3'>{sidebarLinkItem.title}</span>
									)}
								</span>
							</NavLink>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
