export const Currency = ({ price, className }) => {
	return (
		<span className={className}>
			{new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(price)}
		</span>
	);
};
