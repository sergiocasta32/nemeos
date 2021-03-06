import React, { Component } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import TableCell from "@material-ui/core/TableCell";
import { darken, fade, lighten } from "@material-ui/core/styles/colorManipulator";
import Typography from "@material-ui/core/Typography";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import classNames from "clsx";
import {
	Scheduler,
	MonthView,
	WeekView,
	DayView,
	ViewSwitcher,
	Appointments,
	Toolbar,
	DateNavigator,
	AppointmentTooltip,
	AppointmentForm,
	EditRecurrenceMenu,
	Resources,
	DragDropProvider
} from "@devexpress/dx-react-scheduler-material-ui";
import WbSunny from "@material-ui/icons/WbSunny";
import FilterDrama from "@material-ui/icons/FilterDrama";
import Opacity from "@material-ui/icons/Opacity";
import ColorLens from "@material-ui/icons/FitnessCenter";
import { withStyles } from "@material-ui/core/styles";
import { owners } from "./demo-data/tasks";
import { Icon, CardActionArea } from "@material-ui/core";

const appointments = [
	{
		id: 0,
		title: "AB Intervals",
		price: 5,
		exercises: ["cardio", "pesas"],
		startDate: new Date(2020, 7, 7, 9, 30),
		endDate: new Date(2020, 7, 7, 10, 0),
		ownerId: 1
	},
	{
		id: 1,
		title: "Core Cardio",
		startDate: new Date(2020, 7, 28, 9, 30),
		endDate: new Date(2020, 7, 28, 11, 30),
		ownerId: 1
	},
	{
		id: 2,
		title: "The Pyramid",
		startDate: new Date(2020, 7, 9, 12, 0),
		endDate: new Date(2020, 7, 9, 13, 0),
		ownerId: 2
	},
	{
		id: 3,
		title: "Dynamic Core",
		startDate: new Date(2020, 7, 18, 14, 30),
		endDate: new Date(2020, 7, 18, 15, 30),
		ownerId: 2
	},
	{
		id: 4,
		title: "RIPT Circuit",
		startDate: new Date(2020, 7, 20, 12, 0),
		endDate: new Date(2020, 7, 20, 13, 35),
		ownerId: 6
	},
	{
		id: 5,
		title: "Full Body Extreme",
		startDate: new Date(2020, 7, 7, 13, 0),
		endDate: new Date(2020, 7, 7, 14, 0),
		rRule: "FREQ=WEEKLY;BYDAY=FR;UNTIL=20200831",
		exDate: "20200807T100000Z,20200814T100000Z,20200821T100000Z",
		ownerId: 2
	},
	{
		id: 6,
		title: "UpperBody Aniquilitaion",
		startDate: new Date(2020, 7, 28, 12, 0),
		endDate: new Date(2020, 7, 28, 12, 30),
		rRule: "FREQ=WEEKLY;BYDAY=TH;UNTIL=20200827",
		exDate: "20200805T090000Z,20200819T090000Z",
		ownerId: 5
	},
	{
		id: 7,
		title: "Cardio Speed 3.0",
		startDate: new Date(2020, 7, 3, 11, 0),
		endDate: new Date(2020, 7, 3, 12, 0),
		rRule: "FREQ=WEEKLY;BYDAY=TU;UNTIL=20200801",
		exDate: "20200710T080000Z,20200724T080000Z",
		ownerId: 3
	},
	{
		id: 8,
		title: "LowerBody Destructor",
		startDate: new Date(2020, 7, 9, 11, 0),
		endDate: new Date(2020, 7, 9, 12, 0),
		ownerId: 3
	}
];

const resources = [
	{
		fieldName: "ownerId",
		title: "Owners",
		instances: owners
	}
];

const getBorder = theme =>
	`1px solid ${
		theme.palette.type === "light"
			? lighten(fade(theme.palette.divider, 1), 0.88)
			: darken(fade(theme.palette.divider, 1), 0.68)
	}`;

const DayScaleCell = props => <MonthView.DayScaleCell {...props} style={{ textAlign: "center", fontWeight: "bold" }} />;

const styles = theme => ({
	cell: {
		color: "#78909C!important",
		position: "relative",
		userSelect: "none",
		verticalAlign: "top",
		padding: 0,
		height: 100,
		borderLeft: getBorder(theme),
		"&:first-child": {
			borderLeft: "none"
		},
		"&:last-child": {
			paddingRight: 0
		},
		"tr:last-child &": {
			borderBottom: "none"
		},
		"&:hover": {
			backgroundColor: "white"
		},
		"&:focus": {
			backgroundColor: fade(theme.palette.primary.main, 0.15),
			outline: 0
		}
	},
	content: {
		display: "flex",
		justifyContent: "center",
		width: "100%",
		height: "100%",
		position: "absolute",
		alignItems: "center"
	},
	text: {
		padding: "0.5em",
		textAlign: "center"
	},
	sun: {
		color: "#FFEE58"
	},
	cloud: {
		color: "#90A4AE"
	},
	rain: {
		color: "#4FC3F7"
	},
	/*
	sunBack: {
		backgroundColor: "#FFFDE7"
	},
	cloudBack: {
		backgroundColor: "#ECEFF1"
	},
	rainBack: {
		backgroundColor: "#E1F5FE"
    },
    */
	opacity: {
		opacity: "0.5"
	},
	appointment: {
		borderRadius: "10px",
		"&:hover": {
			opacity: 0.6
		}
	},
	apptContent: {
		"&>div>div": {
			whiteSpace: "normal !important",
			lineHeight: 1.2
		}
	},
	flexibleSpace: {
		flex: "none"
	},
	flexContainer: {
		display: "flex",
		alignItems: "center"
	},
	tooltipContent: {
		padding: theme.spacing(3, 1),
		paddingTop: 0,
		backgroundColor: theme.palette.background.paper,
		boxSizing: "border-box",
		width: "400px"
	},
	tooltipText: {
		...theme.typography.body2,
		display: "inline-block"
	},

	title: {
		...theme.typography.h6,
		color: theme.palette.text.secondary,
		fontWeight: theme.typography.fontWeightBold,
		overflow: "hidden",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap"
	},
	icon: {
		color: theme.palette.action.active,
		verticalAlign: "middle",
		horizontalAlign: "right",
		fontSize: 200
	},
	circle: {
		width: theme.spacing(4.5),
		height: theme.spacing(4.5),
		verticalAlign: "super"
	},
	textCenter: {
		textAlign: "center"
	},
	dateAndTitle: {
		lineHeight: 1.1
	},
	titleContainer: {
		paddingBottom: theme.spacing(2)
	},
	container: {
		paddingBottom: theme.spacing(1.5)
	}
});

const WeatherIcon = ({ classes, id }) => {
	switch (id) {
		case 0:
			return <Opacity className={classes.rain} fontSize="large" />;
		case 1:
			return <WbSunny className={classes.sun} fontSize="large" />;
		case 2:
			return <FilterDrama className={classes.cloud} fontSize="large" />;
		default:
			return null;
	}
};

// #FOLD_BLOCK
const CellBase = React.memo(({ classes, startDate, formatDate, otherMonth }) => {
	// #FOLD_BLOCK
	const iconId = Math.abs(Math.floor(Math.sin(startDate.getDate()) * 10) % 3);
	const isFirstMonthDay = startDate.getDate() === 1;
	const formatOptions = isFirstMonthDay ? { day: "numeric", month: "long" } : { day: "numeric" };
	return (
		<TableCell
			tabIndex={0}
			className={classNames({
				[classes.cell]: true,
				// [classes.rainBack]: iconId === 0,
				// [classes.sunBack]: iconId === 1,
				// [classes.cloudBack]: iconId === 2,
				[classes.opacity]: otherMonth
			})}>
			<div className={classes.content}></div>
			{
				//<WeatherIcon classes={classes} id={iconId} />
			}
			<div className={classes.text}>{formatDate(startDate, formatOptions)}</div>
		</TableCell>
	);
});

const TimeTableCell = withStyles(styles, { name: "Cell" })(CellBase);

const Appointment = withStyles(styles, { name: "Appointment" })(({ classes, ...restProps }) => (
	<Appointments.Appointment {...restProps} className={classes.appointment} />
));

const AppointmentContent = withStyles(styles, { name: "AppointmentContent" })(({ classes, ...restProps }) => (
	<Appointments.AppointmentContent {...restProps} className={classes.apptContent} />
));

const FlexibleSpace = withStyles(styles, { name: "ToolbarRoot" })(({ classes, ...restProps }) => (
	<Toolbar.FlexibleSpace {...restProps} className={classes.flexibleSpace}>
		{/* <div className={classes.flexContainer}>
			<Icon />
			<ColorLens fontSize="large" htmlColor="#007bff" />
			<Typography variant="h5" style={{ marginLeft: "10px" }}>
				Nemeos Calendar
			</Typography>
		</div> */}
	</Toolbar.FlexibleSpace>
));

export class Demo1 extends React.PureComponent {
	// #FOLD_BLOCK
	constructor(props) {
		super(props);

		this.state = {
			data: appointments
		};

		this.commitChanges = this.commitChanges.bind(this);
	}

	// #FOLD_BLOCK
	commitChanges({ added, changed, deleted }) {
		this.setState(state => {
			let { data } = state;
			if (added) {
				const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
				data = [...data, { id: startingAddedId, ...added }];
			}
			if (changed) {
				data = data.map(appointment =>
					changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment
				);
			}
			if (deleted !== undefined) {
				data = data.filter(appointment => appointment.id !== deleted);
			}
			return { data };
		});
	}

	render() {
		const { data } = this.state;

		return (
			<Paper>
				<Scheduler data={data}>
					<EditingState onCommitChanges={this.commitChanges} />
					<ViewState defaultCurrentDate={this.currentDate} />

					<MonthView timeTableCellComponent={TimeTableCell} dayScaleCellComponent={DayScaleCell} />
					<WeekView startDayHour={10} endDayHour={19} />
					<DayView startDayHour={9} endDayHour={18} />

					<Appointments appointmentComponent={Appointment} appointmentContentComponent={AppointmentContent} />
					<Resources data={resources} />

					<Toolbar flexibleSpaceComponent={FlexibleSpace} />
					<ViewSwitcher />
					<DateNavigator />

					<EditRecurrenceMenu />
					<AppointmentTooltip showCloseButton showDeleteButton showOpenButton />
					<AppointmentForm />
					<DragDropProvider />
				</Scheduler>
			</Paper>
		);
	}
}
WeatherIcon.propTypes = {
	classes: PropTypes.array.isRequired,
	id: PropTypes.number.isRequired
};

CellBase.propTypes = {
	classes: PropTypes.array.isRequired,
	startDate: PropTypes.string.isRequired,
	formatDate: PropTypes.string.isRequired,
	otherMonth: PropTypes.string.isRequired
};
