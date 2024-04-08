import classes from './Quiz.module.css';
export default function Quiz({ children, ...props }) {
	const rootClasses = [];
	return (
		<div className={classes.quiz_container}>
			<p {...props} className={classes.quiz_box}>
				{children}
			</p>
		</div>
	);
}
