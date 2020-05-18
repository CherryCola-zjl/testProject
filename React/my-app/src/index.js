import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// const name = 'Jl.z';
// const element = <h1>Hello, {formateName()}</h1>;
// function formateName(){
// 	return name +'asda'
// }
// function Welcome() {
// 	return (
// 		<div>hellow,{name}</div>
// 	)
// }

// ReactDOM.render(
//   <Welcome />,
//   document.getElementById('root')
// );

class Clock extends React.Component {
	constructor(props) {
		super(props)
		this.state = {date: new Date()};
	}
	componentDidMount(){
		this.timer = setInterval(
			()=> this.tick(),
			1000
		)
	}
	componentWillUnmount(){
		clearInterval(this.timer)
	}
	tick() {
		this.setState({
			date: new Date()
		})
	}
	render(){
		return (
			<div>
				<h1>It is {this.state.date.toLocaleString()}</h1>
			</div>
		)
	}
}

class LoggingButton extends React.Component {
  // 此语法确保 `handleClick` 内的 `this` 已被绑定。
  // 注意: 这是 *实验性* 语法。
	constructor(props){
		super(props)
		this.state = {date: 111};
	}
  handleClick = () => {
    console.log('this is:', this);
		this.setState({
			date: 122
		})
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.date}
      </button>
    );
  }
}

function Mpp(){
	return (
		<div>
			<Clock />
			<Clock />
			<Clock />
			<LoggingButton />
		</div>	
	)
}
ReactDOM.render(
	<Mpp />,
	document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
