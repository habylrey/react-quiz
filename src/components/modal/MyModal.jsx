import classes from './MyModal.module.css';
const MyModal = ({ children, visible, setVisible }) => {
	const rootClasses = [classes.myModal];
	!visible ? rootClasses.push(classes.active) : '';
	return (
		<div
			onClick={() => setVisible(false)}
			className={rootClasses.join(' ')}
		>
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className={classes.myModalContent}
			>
				{children}
			</div>
		</div>
	);
};
export default MyModal;
