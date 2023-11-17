import clsx from 'clsx';
import { Dropdown, Badge } from 'flowbite-react';
import { Currency } from '../../components/Currency';

import { ReactComponent as IconSearch } from '../../assets/icons/search.svg';
import { ReactComponent as IconFilter } from '../../assets/icons/filter.svg';
import { ReactComponent as IconChevronDown } from '../../assets/icons/chevron-down.svg';
import { ReactComponent as IconActions } from '../../assets/icons/vertical-dots.svg';

const columns = [
	{ key: 'orderId', display: 'Order ID', sortable: true },
	{ key: 'user', display: 'User', sortable: true },
	{ key: 'orderDate', display: 'Order Date', sortable: true },
	{ key: 'items', display: 'Items', sortable: false },
	{ key: 'payment_mode', display: 'Payment Mode', sortable: true },
	{ key: 'price', display: 'Price', sortable: true },
	{ key: 'status', display: 'Status', sortable: true },
	{ key: 'action', display: '', sortable: false },
];

const dummy_data = [
	{
		user: 'John Doe',
		items: ['Product A', 'Product B', 'Product C'],
		isPrepaid: true,
		price: 150.99,
		status: 'received',
		order_date: '2023-10-08T10:30:00Z',
		orderId: '12345',
	},
	{
		user: 'Jane Smith',
		items: ['Product B', 'Product D'],
		isPrepaid: false,
		price: 75.5,
		status: 'in-progress',
		order_date: '2023-10-09T14:45:00Z',
		orderId: '54321',
	},
	{
		user: 'Alice Johnson',
		items: ['Product A', 'Product C', 'Product E'],
		isPrepaid: true,
		price: 199.99,
		status: 'dispatched',
		order_date: '2023-10-10T09:15:00Z',
		orderId: '78901',
	},
	{
		user: 'Robert Brown',
		items: ['Product C', 'Product D', 'Product F'],
		isPrepaid: true,
		price: 120.75,
		status: 'completed',
		order_date: '2023-10-11T18:20:00Z',
		orderId: '24680',
	},
	{
		user: 'Sarah White',
		items: ['Product A', 'Product B'],
		isPrepaid: false,
		price: 99.95,
		status: 'received',
		order_date: '2023-10-12T12:00:00Z',
		orderId: '13579',
	},
	{
		user: 'Michael Clark',
		items: ['Product D', 'Product E'],
		isPrepaid: true,
		price: 55.25,
		status: 'in-progress',
		order_date: '2023-10-13T16:30:00Z',
		orderId: '86420',
	},
	{
		user: 'Emily Davis',
		items: ['Product B', 'Product F'],
		isPrepaid: false,
		price: 79.99,
		status: 'cancelled',
		order_date: '2023-10-14T08:45:00Z',
		orderId: '97531',
	},
	{
		user: 'William Taylor',
		items: ['Product A', 'Product D', 'Product E'],
		isPrepaid: true,
		price: 189.5,
		status: 'dispatched',
		order_date: '2023-10-15T11:10:00Z',
		orderId: '11223',
	},
	{
		user: 'Olivia Anderson',
		items: ['Product C'],
		isPrepaid: false,
		price: 25.99,
		status: 'completed',
		order_date: '2023-10-16T09:00:00Z',
		orderId: '99887',
	},
	{
		user: 'James Wilson',
		items: ['Product A', 'Product B', 'Product E'],
		isPrepaid: true,
		price: 145.75,
		status: 'received',
		order_date: '2023-10-17T14:20:00Z',
		orderId: '66778',
	},
	{
		user: 'Sophia Martinez',
		items: ['Product C', 'Product D'],
		isPrepaid: false,
		price: 69.9,
		status: 'in-progress',
		order_date: '2023-10-18T17:55:00Z',
		orderId: '55667',
	},
	{
		user: 'Liam Adams',
		items: ['Product F'],
		isPrepaid: true,
		price: 35.25,
		status: 'completed',
		order_date: '2023-10-19T12:15:00Z',
		orderId: '22334',
	},
	{
		user: 'Ava Turner',
		items: ['Product A', 'Product D', 'Product F'],
		isPrepaid: true,
		price: 210.0,
		status: 'dispatched',
		order_date: '2023-10-20T10:05:00Z',
		orderId: '77889',
	},
	{
		user: 'Noah Scott',
		items: ['Product B', 'Product C'],
		isPrepaid: false,
		price: 49.99,
		status: 'cancelled',
		order_date: '2023-10-21T15:40:00Z',
		orderId: '99001',
	},
	{
		user: 'Emma Lewis',
		items: ['Product A', 'Product E'],
		isPrepaid: true,
		price: 89.5,
		status: 'received',
		order_date: '2023-10-22T08:30:00Z',
		orderId: '11234',
	},
];

const statusMap = {
	completed: 'success',
	dispatched: 'purple',
	cancelled: 'failure',
	'in-progress': 'warning',
	received: 'dark',
};

const Orders = () => {
	return (
		<div className=''>
			<h2 className='text-2xl font-medium'>Orders</h2>
			<section className='bg-white p-4 mt-4'>
				<div className='relative overflow-hidden'>
					<div
						className={clsx(
							'flex flex-col md:flex-row items-center justify-between',
							'space-y-3 md:space-y-0 md:space-x-4 p-4'
						)}
					>
						<div className='w-full md:w-1/2'>
							<div className='relative w-full'>
								<div
									className={clsx(
										'absolute inset-y-0 left-0',
										'flex items-center pl-3 pointer-events-none'
									)}
								>
									<IconSearch className='w-4 h-4' />
								</div>
								<input
									type='text'
									className={clsx(
										'block w-full bg-gray-50 border border-gray-300 rounded-lg',
										'text-gray-900 text-sm pl-10 p-2'
									)}
									placeholder='Search'
								/>
							</div>
						</div>
						<div
							className={clsx(
								'w-full md:w-auto',
								'flex flex-col md:flex-row items-stretch md:items-center justify-end flex-shrink-0',
								'space-y-2 md:space-y-0 md:space-x-3'
							)}
						>
							<div className='flex items-center space-x-3 w-full md:w-auto'>
								<div className=''>
									<Dropdown
										dismissOnClick={false}
										renderTrigger={() => (
											<div
												className={clsx(
													'flex items-center justify-center gap-2',
													'border border-gray-200 rounded-lg',
													'bg-white w-full md:w-auto py-2 px-4 cursor-pointer',
													'text-sm font-medium text-gray-900',
													'hover:bg-gray-100 hover:text-primary-700'
												)}
											>
												<IconFilter className='w-4 h-4' />
												<span>Filter</span>
												<IconChevronDown className='-mr-1 ml-1.5 w-5 h-5' />
											</div>
										)}
									>
										<Dropdown.Item className='flex items-center cursor-default'>
											<input
												id='courses'
												type='checkbox'
												value='courses'
												className={clsx(
													'w-4 h-4',
													'bg-gray-100 border-gray-300 rounded',
													'text-primary-600'
												)}
											/>
											<label
												htmlFor='courses'
												className='ml-2 text-sm font-medium text-gray-900 cursor-pointer'
											>
												Courses
											</label>
										</Dropdown.Item>
										<Dropdown.Item className='flex items-center cursor-default'>
											<input
												id='products'
												type='checkbox'
												value='products'
												className={clsx(
													'w-4 h-4',
													'bg-gray-100 border-gray-300 rounded',
													'text-primary-600'
												)}
											/>
											<label
												htmlFor='products'
												className='ml-2 text-sm font-medium text-gray-900 cursor-pointer'
											>
												Products
											</label>
										</Dropdown.Item>
										<Dropdown.Divider />
										<Dropdown.Item className='flex items-center cursor-default'>
											<input
												id='prepaid'
												type='checkbox'
												value='prepaid'
												className={clsx(
													'w-4 h-4',
													'bg-gray-100 border-gray-300 rounded',
													'text-primary-600'
												)}
											/>
											<label
												htmlFor='prepaid'
												className='ml-2 text-sm font-medium text-gray-900 cursor-pointer'
											>
												Prepaid
											</label>
										</Dropdown.Item>
										<Dropdown.Item className='flex items-center cursor-default'>
											<input
												id='non-prepaid'
												type='checkbox'
												value='non-prepaid'
												className={clsx(
													'w-4 h-4',
													'bg-gray-100 border-gray-300 rounded',
													'text-primary-600'
												)}
											/>
											<label
												htmlFor='non-prepaid'
												className='ml-2 text-sm font-medium text-gray-900 cursor-pointer'
											>
												Non-Prepaid
											</label>
										</Dropdown.Item>

										<Dropdown.Divider />

										<Dropdown.Item className='flex items-center cursor-default'>
											<input
												id='in-progress'
												type='checkbox'
												value='in-progress'
												className={clsx(
													'w-4 h-4',
													'bg-gray-100 border-gray-300 rounded',
													'text-primary-600'
												)}
											/>
											<label
												htmlFor='in-progress'
												className='ml-2 text-sm font-medium text-gray-900 cursor-pointer'
											>
												In Progress
											</label>
										</Dropdown.Item>
										<Dropdown.Item className='flex items-center cursor-default'>
											<input
												id='received'
												type='checkbox'
												value='received'
												className={clsx(
													'w-4 h-4',
													'bg-gray-100 border-gray-300 rounded',
													'text-primary-600'
												)}
											/>
											<label
												htmlFor='received'
												className='ml-2 text-sm font-medium text-gray-900 cursor-pointer'
											>
												Received
											</label>
										</Dropdown.Item>
										<Dropdown.Item className='flex items-center cursor-default'>
											<input
												id='dispatched'
												type='checkbox'
												value='dispatched'
												className={clsx(
													'w-4 h-4',
													'bg-gray-100 border-gray-300 rounded',
													'text-primary-600'
												)}
											/>
											<label
												htmlFor='dispatched'
												className='ml-2 text-sm font-medium text-gray-900 cursor-pointer'
											>
												Dispatched
											</label>
										</Dropdown.Item>
										<Dropdown.Item className='flex items-center cursor-default'>
											<input
												id='completed'
												type='checkbox'
												value='completed'
												className={clsx(
													'w-4 h-4',
													'bg-gray-100 border-gray-300 rounded',
													'text-primary-600'
												)}
											/>
											<label
												htmlFor='completed'
												className='ml-2 text-sm font-medium text-gray-900 cursor-pointer'
											>
												Completed
											</label>
										</Dropdown.Item>
										<Dropdown.Item className='flex items-center cursor-default'>
											<input
												id='cancelled'
												type='checkbox'
												value='cancelled'
												className={clsx(
													'w-4 h-4',
													'bg-gray-100 border-gray-300 rounded',
													'text-primary-600'
												)}
											/>
											<label
												htmlFor='cancelled'
												className='ml-2 text-sm font-medium text-gray-900 cursor-pointer'
											>
												Cancelled
											</label>
										</Dropdown.Item>
									</Dropdown>
								</div>
							</div>
						</div>
					</div>
					<div className='overflow-x-auto'>
						<table className='w-full text-sm text-left text-gray-500 '>
							<thead className='text-xs text-gray-700 uppercase bg-gray-50'>
								<tr>
									{columns.map((colItem) => (
										<th key={colItem.key} scope='col' className='px-4 py-3'>
											{colItem.display}
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{dummy_data.map((row) => (
									<tr className='border-b '>
										<td className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap'>
											#{row.orderId}
										</td>
										<td className='px-4 py-3 font-medium text-gray-900'>
											{row.user}
										</td>
										<td className='px-4 py-3'>{row.order_date}</td>
										<td className='px-4 py-3'>{row.items.join(', ')}</td>
										<td className='px-4 py-3'>
											{row.isPrepaid ? 'Prepaid' : 'COD'}
										</td>
										<td className='px-4 py-3'>
											<Currency price={row.price} />
										</td>
										<td className='px-4 py-3'>
											<Badge
												className='uppercase w-fit whitespace-nowrap'
												color={statusMap[row.status]}
											>
												{row.status}
											</Badge>
										</td>
										<td className='px-4 py-3 flex items-center justify-end'>
											<Dropdown
												dismissOnClick={false}
												renderTrigger={() => (
													<button>
														<IconActions className='w-5 h-5' />
													</button>
												)}
											>
												<Dropdown.Item>View Detail</Dropdown.Item>
												<Dropdown.Item>Mark as In-Progress</Dropdown.Item>
												<Dropdown.Item>Mark as Dispatched</Dropdown.Item>
												<Dropdown.Item>Mark as Completed</Dropdown.Item>
											</Dropdown>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<nav
						className='flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4'
						aria-label='Table navigation'
					>
						<span className='text-sm font-normal text-gray-500 '>
							Showing <span className='font-semibold text-gray-900 '>1-10</span>{' '}
							of <span className='font-semibold text-gray-900 '>1000</span>
						</span>
						<ul className='inline-flex items-stretch -space-x-px'>
							<li>
								<span
									className={clsx(
										'flex items-center justify-center',
										'text-sm py-2 px-3 leading-tight text-gray-500 hover:text-gray-700',
										'border border-gray-300 bg-white hover:bg-gray-100'
									)}
								>
									<svg
										className='w-5 h-5'
										aria-hidden='true'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
											clipRule='evenodd'
										/>
									</svg>
								</span>
							</li>
							<li>
								<button
									className={clsx(
										'flex items-center justify-center',
										'text-sm py-2 px-3 leading-tight text-gray-500 hover:text-gray-700',
										'border border-gray-300 bg-white hover:bg-gray-100'
									)}
								>
									1
								</button>
							</li>
							<li>
								<button
									className={clsx(
										'flex items-center justify-center',
										'text-sm py-2 px-3 leading-tight text-gray-500 hover:text-gray-700',
										'border border-gray-300 bg-white hover:bg-gray-100'
									)}
								>
									2
								</button>
							</li>
							<li>
								<span
									className={clsx(
										'flex items-center justify-center',
										'text-sm py-2 px-3 leading-tight text-gray-500 hover:text-gray-700',
										'border border-gray-300 bg-white hover:bg-gray-100'
									)}
								>
									3
								</span>
							</li>
							<li>
								<span
									className={clsx(
										'flex items-center justify-center',
										'text-sm py-2 px-3 leading-tight text-gray-500 hover:text-gray-700',
										'border border-gray-300 bg-white hover:bg-gray-100'
									)}
								>
									...
								</span>
							</li>
							<li>
								<span className='flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'>
									100
								</span>
							</li>
							<li>
								<span
									className={clsx(
										'flex items-center justify-center',
										'text-sm py-2 px-3 leading-tight text-gray-500 hover:text-gray-700',
										'border border-gray-300 bg-white hover:bg-gray-100'
									)}
								>
									<svg
										className='w-5 h-5'
										aria-hidden='true'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
											clipRule='evenodd'
										/>
									</svg>
								</span>
							</li>
						</ul>
					</nav>
				</div>
			</section>
		</div>
	);
};
export default Orders;
