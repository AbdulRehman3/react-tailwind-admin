import { ReactComponent as IconDashboard } from '../../assets/icons/dashboard.svg';
import { ReactComponent as IconProduct } from '../../assets/icons/product.svg';
import { ReactComponent as IconInvoice } from '../../assets/icons/invoice.svg';
import { ReactComponent as IconUsers } from '../../assets/icons/users.svg';
import { ReactComponent as IconDiscounts } from '../../assets/icons/discount.svg';
import { ReactComponent as IconPayments } from '../../assets/icons/payments.svg';
import { ReactComponent as IconAanalytics } from '../../assets/icons/analytics.svg';
import { ReactComponent as IconSettings } from '../../assets/icons/settings.svg';

const sidebarLinks = [
	{
		key: 'dashboard',
		title: 'Dashboard',
		icon: IconDashboard,
		link: '/admin/dashboard',
	},
	{
		key: 'products',
		title: 'Products',
		icon: IconProduct,
		link: '/admin/products',
	},
	{ key: 'orders', title: 'Orders', icon: IconInvoice, link: '/admin/orders' },
	{ key: 'users', title: 'Users', icon: IconUsers, link: '/admin/users' },
	{
		key: 'coupons',
		title: 'Coupons & Discounts',
		icon: IconDiscounts,
		link: '/admin/coupons',
	},
	{
		key: 'payments',
		title: 'Payments',
		icon: IconPayments,
		link: '/admin/payments',
	},
	{
		key: 'analytics',
		title: 'Analytics',
		icon: IconAanalytics,
		link: '/admin/analytics',
	},
	{
		key: 'settings',
		title: 'Settings',
		icon: IconSettings,
		link: '/admin/settings',
	},
];

export default sidebarLinks;
