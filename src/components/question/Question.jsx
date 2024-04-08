import classes from './Question.module.css';
export default function Question({ children, ...props }) {
	return (
		<div>
			<h1 {...props} className={classes.quest_text}>
				{children}
			</h1>
		</div>
	);
}
