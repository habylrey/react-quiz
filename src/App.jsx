import { useState } from 'react';
import './App.css';
import Quiz from './components/quiz/Quiz';
import Question from './components/question/Question';
import data from './data/questions.json';
import HeartIcon from './assets/icons/HeartIcon';
import MyModal from './components/modal/MyModal';
import MyButton from './components/button/MyButton';
import StartWindow from './components/window/StartWindow';

function App() {
	const [window, setWindow] = useState(true);
	const [num, setNum] = useState(0);
	const [counter, setCounter] = useState(0);
	const [lives, setLives] = useState([
		<HeartIcon />,
		<HeartIcon />,
		<HeartIcon />,
	]);
	const [modal, setModal] = useState(false);
	const [bestScore, setBestScore] = useState(counter);
	if (counter > bestScore) {
		setBestScore(counter);
		localStorage.setItem('newBestScore', counter);
	}
	let winString = counter < 10 ? 'Maybe next time!' : 'Gratz!';
	function finishScreen() {
		if (num > data.at(-1).id) {
			setModal(true);
		}
	}
	function checkAnswer(e) {
		function gameOver() {
			setModal(true);
			setNum(0);
			setLives([<HeartIcon />, <HeartIcon />, <HeartIcon />]);
		}
		if (num > data.at(-1).id) {
			finishScreen();
		} else {
			if (!lives.length < 1) {
				if (
					e.target.getAttribute('value') == data[num].answer &&
					e.target.hasAttribute('value')
				) {
					setCounter(counter + 1);
					e.target.style.backgroundColor = '#a8e4a0';
				} else {
					e.target.hasAttribute('value')
						? (e.target.style.backgroundColor = '#D53032')
						: '';
					setLives(lives.slice(0, -1));
				}
				setTimeout(() => {
					setNum(num + 1);
				}, 1000);
			} else {
				gameOver();
			}
		}
	}
	return (
		<>
			<div className="quiz-interface">
				<StartWindow vision={window} seyVision={setWindow}>
					<div className="startWindow-container">
						<h1 className="startText">
							Welcome to the <strong>Quiz game</strong>
						</h1>
						<p className="startWindow-about">
							Quiz game - захватывающая игра для всех любителей
							загадок и викторин! Продемонстрируй свои знания в
							различных областях, от спорта до науки, от истории
							до кино. Угадывай загадки, отвечай на вопросы и
							зарабатывай очки. Но будь осторожен, у тебя всего
							три жизни на каждую попытку, так что не допускай
							ошибок!
						</p>
						<MyButton
							onClick={() => {
								setWindow(false);
							}}
						>
							Start
						</MyButton>
						<p className="startWindow-about">
							Best score: {localStorage.getItem('newBestScore')} /{' '}
							{data.length}
						</p>
					</div>
				</StartWindow>
				<MyModal visible={modal} setVisible={setModal}>
					{`${winString} Your score is ${counter} / ${data.length}
					 Best score: ${localStorage.getItem('newBestScore')}`}
					<MyButton
						onClick={() => {
							setModal(false);
							setCounter(0);
							setNum(0);
							setLives([
								<HeartIcon />,
								<HeartIcon />,
								<HeartIcon />,
							]);
						}}
					>
						Restart
					</MyButton>
					<MyButton
						onClick={() => {
							setWindow(true);
							setModal(false);
						}}
					>
						Exit
					</MyButton>
				</MyModal>
				<Question>{lives}</Question>
				<Question>{data[num].question}</Question>
				<div onClick={checkAnswer} className="container">
					{data[num].options.map((item) => {
						return (
							<Quiz value={item} key={item}>
								{item}
							</Quiz>
						);
					})}
				</div>
				<Question>
					{num + 1} / {data.length}
				</Question>
			</div>
		</>
	);
}
export default App;

// DONE!
