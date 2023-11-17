import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';
import {
	selectSidebarCollapsed,
	setSidebarCollapsed,
} from '../../store/configs';

export const AdminLayout = () => {
	const dispatch = useDispatch();
	const sidebarCollapsed = useSelector(selectSidebarCollapsed);

	const onToggleSidebar = () => {
		dispatch(setSidebarCollapsed(!sidebarCollapsed));
	};

	return (
		<div className='overflow-x-hidden bg-gray-100'>
			<AdminSidebar
				sidebarCollapsed={sidebarCollapsed}
				onToggleSidebar={onToggleSidebar}
			/>
			<div
				className={clsx(
					'relative min-h-screen flex flex-col',
					'transition-all duration-500 ease-in-out',
					sidebarCollapsed
						? '2md:ml-[72px] 2md:w-[calc(100vw-72px)]'
						: '2md:ml-[256px] 2md:w-[calc(100vw-256px)]'
				)}
			>
				<AdminHeader
					sidebarCollapsed={sidebarCollapsed}
					onToggleSidebar={onToggleSidebar}
				/>
				<main className={clsx('h-[calc(100vh-69px)] mt-[69px] px-6 pt-6')}>
					<Outlet />
				</main>
			</div>
		</div>
	);
};
