import classes from './MyButton.module.css';
export default function MyButton({ children, ...props }) {
	return (
		<div>
			<button {...props} className={classes.myButton}>
				{children}
			</button>
		</div>
	);
}
