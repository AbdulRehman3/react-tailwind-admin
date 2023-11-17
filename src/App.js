import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Login from './pages/auth/Login';
import { AdminLayout } from './components/layout';
// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import Products from './pages/admin/ProductsList';
import Orders from './pages/admin/Orders';
import Users from './pages/admin/Users';
import Coupons from './pages/admin/Coupons';
import Payments from './pages/admin/Payments';
import Statistics from './pages/admin/Statistics';
import Settings from './pages/admin/Settings';

function App() {
	return (
		<div className='App'>
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path='admin' element={<AdminLayout />}>
							<Route path='dashboard' element={<Dashboard />} />
							<Route path='products' element={<Products />} />
							<Route path='orders' element={<Orders />} />
							<Route path='users' element={<Users />} />
							<Route path='coupons' element={<Coupons />} />
							<Route path='payments' element={<Payments />} />
							<Route path='analytics' element={<Statistics />} />
							<Route path='settings' element={<Settings />} />
							<Route path='' element={<Navigate to='dashboard' />} />
						</Route>
						<Route path='/login' element={<Login />} />
						<Route path='*' element={<Navigate to='admin/dashboard' />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</div>
	);
}

export default App;
