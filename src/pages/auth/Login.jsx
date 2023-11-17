import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div
			class='bg-gray-100'
			style={{
				background: `url(/login_cover.jpeg)`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundAttachment: 'fixed',
			}}
		>
			<div class='flex flex-wrap flex-row'>
				<span class='fixed bg-gray-900 bg-opacity-70 w-full h-full inset-x-0 top-0'></span>
				<div class='flex-shrink max-w-full w-full min-h-screen sm:w-2/3 lg:w-1/2 xl:w-1/3 z-30'>
					{/* <!-- login form --> */}
					<div class='max-w-full w-full h-full px-6 sm:px-12 bg-white shadow-lg z-40'>
						<div class='relative'>
							<div class='p-6 sm:p-8'>
								<form id='login-form'>
									<div class='text-center py-2 text-2xl'>
										<h2 class='text-2xl font-semibold text-gray-200 px-4 max-h-9 overflow-hidden'>
											<span class='text-gray-700'>Welcom Back</span>
										</h2>
									</div>
									<hr class='block w-12 h-0.5 mx-auto mb-5 bg-gray-700 border-gray-700' />
									<div class='mb-6'>
										<label for='inputemail' class='inline-block mb-2'>
											Email
										</label>
										<input
											name='email'
											id='inputemail'
											class='w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0'
											value=''
											aria-label='email'
											type='email'
											required=''
										/>
									</div>
									<div class='mb-6'>
										<div class='flex flex-wrap flex-row'>
											<div class='flex-shrink max-w-full w-1/2'>
												<label for='inputpass' class='inline-block mb-2'>
													Password
												</label>
											</div>
										</div>
										<input
											id='inputpass'
											class='w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0'
											aria-label='password'
											type='password'
											value=''
											required=''
										/>
										<div class='text-right'>
											<Link class='hover:text-primary' href='#'>
												Forgot password?
											</Link>
										</div>
									</div>
									<div class='mb-6'>
										<input
											class='form-checkbox h-5 w-5 text-primary border border-gray-300 rounded focus:outline-none'
											type='checkbox'
											value=''
											id='remember'
											required=''
										/>
										<label class='ml-2' for='remember'>
											Remember me
										</label>
									</div>
									<div class='grid'>
										<button
											type='submit'
											class='py-2 px-4 inline-block text-center rounded leading-5 text-gray-100 bg-primary border border-primary hover:text-white hover:bg-primary-500 hover:ring-0 hover:border-primary-500 focus:bg-primary-500 focus:border-primary-500 focus:outline-none focus:ring-0'
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='currentColor'
												class='inline-block w-4 h-4 mr-2 bi bi-box-arrow-in-right'
												viewBox='0 0 16 16'
											>
												<path
													fill-rule='evenodd'
													d='M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z'
												></path>
												<path
													fill-rule='evenodd'
													d='M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z'
												></path>
											</svg>
											Login
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Login;
