import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export class Application1 extends React.Component {
	render() {
		return (
			<div>
				<External />
				<Calendar3 />
			</div>
		);
	}
}

export class Calendar3 extends React.Component {
	render() {
		return <div id="calendar" />;
	}
	componentDidMount() {
		$("#calendar").fullCalendar({
			header: {
				left: "prev,next today",
				center: "title",
				right: "month,agendaWeek,agendaDay"
			},
			editable: true,
			droppable: true,
			drop: function() {
				if ($("#drop-remove").is(":checked")) {
					$(this).remove();
				}
			}
		});
	}
}

export class External extends React.Component {
	render() {
		return (
			<div id="external-events">
				<h4>Draggable Events</h4>
				<div className="fc-event">My Event 1</div>
				<div className="fc-event">My Event 2</div>
				<div className="fc-event">My Event 3</div>
				<div className="fc-event">My Event 4</div>
				<div className="fc-event">My Event 5</div>
				<p>
					<input type="checkbox" id="drop-remove" />
					<label hmtlfor="drop-remove">remove after drop</label>
				</p>
			</div>
		);
	}
}
