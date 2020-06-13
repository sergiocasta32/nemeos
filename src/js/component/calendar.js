import React, { Component } from "react";
import "../../styles/calendar.scss";

export const Calendar = () => {
	return (
		<div className="calendar-container">
			<div className="calendar-header">
				<h1>
					{" "}
					Junio
					<button>▾</button>
				</h1>
				<p>2020</p>
			</div>
			<div className="calendar">
				<span className="day-name">Mon</span>
				<span className="day-name">Tue</span>
				<span className="day-name">Wed</span>
				<span className="day-name">Thu</span>
				<span className="day-name">Fri</span>
				<span className="day-name">Sat</span>
				<span className="day-name">Sun</span>
				<div className="day day--disabled">30</div>
				<div className="day day--disabled">31</div>
				<div className="day">1</div>
				<div className="day">2</div>
				<div className="day">3</div>
				<div className="day">4</div>
				<div className="day">5</div>
				<div className="day">6</div>
				<div className="day">7</div>
				<div className="day">8</div>
				<div className="day">9</div>
				<div className="day">10</div>
				<div className="day">11</div>
				<div className="day">12</div>
				<div className="day">13</div>
				<div className="day">14</div>
				<div className="day">15</div>
				<div className="day">16</div>
				<div className="day">17</div>
				<div className="day">18</div>
				<div className="day">19</div>
				<div className="day">20</div>
				<div className="day">21</div>
				<div className="day">22</div>
				<div className="day">23</div>
				<div className="day">24</div>
				<div className="day">25</div>
				<div className="day">26</div>
				<div className="day">27</div>
				<div className="day">28</div>
				<div className="day">29</div>
				<div className="day">30</div>
				<div className="day day--disabled">1</div>
				<div className="day day--disabled">2</div>
				<div className="day day--disabled">3</div>
				<section className="task task--warning">UpperBody</section>
				<section className="task task--danger">Cardio</section>
				<section className="task task--primary">
					ABS interval
					<div className="task__detail">
						<h2>Descanso</h2>
						<p>20 segundos entre series</p>
					</div>
				</section>
				<section className="task task--info">LowerBody</section>
			</div>
		</div>
	);
};
