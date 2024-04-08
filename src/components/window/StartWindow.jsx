import classes from './StartWindow.module.css';
export default function StartWindow({ children, vision, setVision }) {
	const rootClass = [classes.myWindow];
	!vision ? rootClass.push(classes.active) : '';
	return (
		<div onClick={() => setVision(false)} className={rootClass.join(' ')}>
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className={classes.myWindowContent}
			>
				{children}
			</div>
		</div>
	);
}
