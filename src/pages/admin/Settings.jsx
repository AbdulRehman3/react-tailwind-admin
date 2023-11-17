import clsx from 'clsx';
import { ToggleSwitch, Datepicker } from 'flowbite-react';

const Settings = () => {
	return (
		<div className=''>
			<h2 className='text-2xl font-medium'>Settings</h2>
			<section className='bg-white p-4 mt-4 shadow-sm'>
				<div
					className={clsx(
						'grid gap-4 gap-y-2 grid-cols-1 md:grid-cols-3',
						'text-sm border-b border-gray-200 pb-4'
					)}
				>
					<div className='text-gray-600'>
						<p className='font-medium'>Shipment Delays</p>
						<p>Inform customers of possible delays in shipments.</p>
					</div>

					<div className='md:col-span-2'>
						<div className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5'>
							<div className='col-span-12 flex items-center justify-between mb-1'>
								<span className='text-sm font-medium text-gray-600'>
									Display Alert
								</span>
								<ToggleSwitch checked={false} onChange={() => {}} />
							</div>

							<div className='col-span-12 mb-2'>
								<label
									className='text-sm font-medium text-gray-600'
									htmlFor='full_name'
								>
									Announcement Text
								</label>
								<input
									type='text'
									name='full_name'
									id='full_name'
									className='border border-gray-300 mt-1 rounded px-4 w-full bg-gray-50'
									value=''
								/>
							</div>

							<div className='col-span-12'>
								<p className='text-sm font-medium text-gray-600'>
									Banner Expires On
								</p>
								<Datepicker className='w-fit mt-1' />
							</div>

							<div className='col-span-12 text-right'>
								<div className='inline-flex items-end gap-2 font-medium'>
									<button class='py-2 px-5 text-gray-900 border border-gray-200 hover:bg-gray-100'>
										Cancel
									</button>
									<button className='bg-primary text-white py-2 px-5'>
										Save Changes
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
export default Settings;
