import React, { Component } from "react";
import "../../styles/calendar.scss";

export const Calendar2 = () => {
	var data = [
		{
			text: "Website Re-Design Plan",
			ownerId: [4],
			startDate: new Date(2015, 4, 25, 9, 30),
			endDate: new Date(2015, 4, 25, 11, 30),
			extra: 1
		},
		{
			text: "Book Flights to San Fran for Sales Trip",
			ownerId: [2],
			startDate: new Date(2015, 4, 25, 12, 0),
			endDate: new Date(2015, 4, 25, 13, 0),
			allDay: true,
			extra: 2
		},
		{
			text: "Install New Router in Dev Room",
			ownerId: [1],
			startDate: new Date(2015, 4, 25, 14, 30),
			endDate: new Date(2015, 4, 25, 15, 30),
			extra: 3
		},
		{
			text: "Approve Personal Computer Upgrade Plan",
			ownerId: [3],
			startDate: new Date(2015, 4, 26, 10, 0),
			endDate: new Date(2015, 4, 26, 11, 0),
			extra: 4
		},
		{
			text: "Final Budget Review",
			ownerId: [1],
			startDate: new Date(2015, 4, 26, 12, 0),
			endDate: new Date(2015, 4, 26, 13, 35),
			extra: 5
		},
		{
			text: "New Brochures",
			ownerId: [4],
			startDate: new Date(2015, 4, 26, 14, 30),
			endDate: new Date(2015, 4, 26, 15, 45),
			extra: 6
		},
		{
			text: "Install New Database",
			ownerId: [2],
			startDate: new Date(2015, 4, 27, 9, 45),
			endDate: new Date(2015, 4, 27, 11, 15),
			extra: 7
		},
		{
			text: "Approve New Online Marketing Strategy",
			ownerId: [3, 4],
			startDate: new Date(2015, 4, 27, 12, 0),
			endDate: new Date(2015, 4, 27, 14, 0),
			extra: 8
		},
		{
			text: "Upgrade Personal Computers",
			ownerId: [2],
			startDate: new Date(2015, 4, 27, 15, 15),
			endDate: new Date(2015, 4, 27, 16, 30),
			extra: 9
		},
		{
			text: "Customer Workshop",
			ownerId: [3],
			startDate: new Date(2015, 4, 28, 11, 0),
			endDate: new Date(2015, 4, 28, 12, 0),
			allDay: true,
			extra: 10
		},
		{
			text: "Prepare 2015 Marketing Plan",
			ownerId: [1, 3],
			startDate: new Date(2015, 4, 28, 11, 0),
			endDate: new Date(2015, 4, 28, 13, 30),
			extra: 11
		},
		{
			text: "Brochure Design Review",
			ownerId: [4],
			startDate: new Date(2015, 4, 28, 14, 0),
			endDate: new Date(2015, 4, 28, 15, 30),
			extra: 12
		},
		{
			text: "Create Icons for Website",
			ownerId: [3],
			startDate: new Date(2015, 4, 29, 10, 0),
			endDate: new Date(2015, 4, 29, 11, 30),
			extra: 13
		},
		{
			text: "Upgrade Server Hardware",
			ownerId: [4],
			startDate: new Date(2015, 4, 29, 14, 30),
			endDate: new Date(2015, 4, 29, 16, 0),
			extra: 14
		},
		{
			text: "Submit New Website Design",
			ownerId: [1],
			startDate: new Date(2015, 4, 29, 16, 30),
			endDate: new Date(2015, 4, 29, 18, 0),
			extra: 15
		},
		{
			text: "Launch New Website",
			ownerId: [2],
			startDate: new Date(2015, 4, 29, 12, 20),
			endDate: new Date(2015, 4, 29, 14, 0),
			extra: 16
		},
		{
			text: "Stand-up meeting",
			ownerId: [1, 2, 3, 4],
			startDate: new Date(2015, 4, 25, 9, 0),
			endDate: new Date(2015, 4, 25, 9, 15),
			recurrenceRule: "FREQ=DAILY;BYDAY=MO,TU,WE,TH,FR;UNTIL=20150530",
			extra: 17
		}
	];

	var resourcesData = [
		{
			text: "Samantha Bright",
			id: 1,
			color: "#cb6bb2"
		},
		{
			text: "John Heart",
			id: 2,
			color: "#56ca85"
		},
		{
			text: "Todd Hoffman",
			id: 3,
			color: "#1e90ff"
		},
		{
			text: "Sandra Johnson",
			id: 4,
			color: "#ff9747"
		}
	];

	var viewModel = {};
	var afspraakItems;
	function buildAfspraakItems(e) {
		viewModel.appointmentForm = e.form;
		viewModel.formData = viewModel.appointmentForm.option("formData");
		viewModel.schedulerPopup = e.component._popup;
		if (afspraakItems == null) {
			formItems = e.form.option("items");
			afspraakItems = {
				itemType: "group",
				caption: "Afspraak",
				colSpan: 1,
				colCount: 2,
				items: []
			};
			formItems.forEach(function(element) {
				if (element.dataField == "ownerId") {
					element.colSpan = 2;
					afspraakItems.items.push(element);
				}
				if (element.dataField == "gebruikerid") {
					element.colSpan = 2;
					afspraakItems.items.push(element);
				}
				if (element.dataField == "klantid") {
					element.colSpan = 2;
					element.editorType = "dxLookup";
					(element.editorOptions.onInitialized = viewModel.klantLookupInitialized),
						(element.editorOptions.onValueChanged = viewModel.newKlantSelected);
					element.editorOptions.searchEnabled = true;
					element.editorOptions.displayExpr = "naam";
					element.editorOptions.searchExpr = ["naam", "adres", "postcode", "plaats"];
					element.editorOptions.title = '<spring:message code="klant.lookup"/>';
					element.editorOptions.itemTemplate = "lookupTemplate";
					element.validationRules = [
						{
							type: "required",
							message: '<spring:message code="validation.error.not.null"/>'
						}
					];
					afspraakItems.items.push(element);
				}
				if (element.dataField == "objektid") {
					element.colSpan = 2;
					element.editorType = "dxLookup";
					(element.editorOptions.onInitialized = viewModel.objektLookupInitialized),
						(element.editorOptions.onSelectionChanged = viewModel.newObjektSelected);
					element.editorOptions.searchEnabled = true;
					element.editorOptions.displayExpr = "naam";
					if (objektRequired) {
						element.editorOptions.showClearButton = false;
					} else {
						element.editorOptions.showClearButton = true;
					}
					element.editorOptions.searchExpr = ["naam", "adres", "postcode", "plaats"];
					element.editorOptions.title = '${inlogGegevens.getObjektnaam()} <spring:message code="lookup"/>';
					element.editorOptions.itemTemplate = "lookupTemplate";
					if (objektRequired) {
						element.validationRules = [
							{
								type: "required",
								message: '<spring:message code="validation.error.not.null"/>'
							}
						];
					}
					afspraakItems.items.push(element);
				}
			});
			formItems.forEach(function(element) {
				if (element.dataField === "allDay" || element.dataField === "recurrenceRule") {
					element.colSpan = 2;
					afspraakItems.items.push(element);
				}
				if (element.dataField === "startDate" || element.dataField === "endDate") {
					afspraakItems.items.push(element);
				}
			});
		} else {
			afspraakItems.items.forEach(function(element) {
				if (element.dataField === "objektid") {
					if (objektRequired) {
						element.editorOptions.showClearButton = false;
					} else {
						element.editorOptions.showClearButton = true;
					}
					if (!objektRequired) {
						delete element.validationRules;
					}
				}
			});
		}
		return afspraakItems;
	}

	var toetsingcontroleItems;
	function buildExtraForm() {
		if (toetsingcontroleItems == null) {
			toetsingcontroleItems = {
				itemType: "group",
				colSpan: 2,
				colCount: 2,
				caption: "Extra fields",
				items: [
					{
						dataField: "extra",
						label: { text: "extra" },
						editorType: "dxNumberBox",
						validationRules: [{ type: "required", message: "Not null" }]
					}
				]
			};
		}
		return toetsingcontroleItems;
	}

	viewModel.mkAppointmentFormCreated = function(e) {
		viewModel.appointmentForm = e.form;
		viewModel.formData = viewModel.appointmentForm.option("formData");
		viewModel.schedulerPopup = e.component._popup;
		var itm = [];
		itm.push(buildAfspraakItems(e, false));
		itm.push(buildExtraForm());
		var form = e.form;
		form.option({
			items: itm,
			formData: viewModel.formData,
			colCount: 3,
			labelLocation: "top",
			showColonAfterLabel: false
		});
	};

	viewModel.schedulerInitialized = function(e) {
		var popupConfig = e.component._popupConfig;
		e.component._popupConfig = function() {
			var popupOptions = popupConfig.apply(e.component, arguments);
			delete popupOptions.maxWidth;
			return $.extend(popupOptions, {
				width: "90%",
				height: "90%"
			});
		};
	};

	viewModel.mkAppointmentClick = function(e) {
		viewModel.singleAppointment = viewModel.scheduler._getSingleAppointmentData(
			e.appointmentData,
			e.appointmentData,
			e.appointmentElement
		);

		viewModel.scheduler.showAppointmentPopup(e.appointmentData, false, viewModel.singleAppointment);

		e.cancel = true;
	};

	$(document).ready(function() {
		var customerData = new DevExpress.data.CustomStore({
			load: function(o) {
				return data;
			}
		});

		viewModel.scheduler = $(".scheduler")
			.dxScheduler({
				dataSource: new DevExpress.data.DataSource({
					store: customerData
				}),
				views: ["agenda", "month", "week", "workWeek", "day"],
				currentView: "workWeek",
				currentDate: new Date(2015, 4, 25),
				useDropDownViewSwitcher: false,
				firstDayOfWeek: 0,
				startDayHour: 8,
				endDayHour: 19,
				resources: [
					{
						fieldExpr: "ownerId",
						allowMultiple: true,
						dataSource: resourcesData,
						label: "Owner"
					}
				],
				width: "100%",
				height: 600,
				onAppointmentFormCreated: viewModel.mkAppointmentFormCreated,
				onInitialized: viewModel.schedulerInitialized
			})
			.dxScheduler("instance");

		var switchModeNames = ["Tabs", "Drop-Down Menu"];

		$("#view-switcher").dxSelectBox({
			items: switchModeNames,
			width: 200,
			value: switchModeNames[0],
			onValueChanged: function(data) {
				scheduler.option("useDropDownViewSwitcher", data.value === switchModeNames[1]);
			}
		});

		var resizing = $("#allow-resizing")
			.dxCheckBox({
				text: "Allow resizing",
				value: true,
				onValueChanged: function(data) {
					scheduler.option("editing.allowResizing", data.value);
				}
			})
			.dxCheckBox("instance");

		var dragging = $("#allow-dragging")
			.dxCheckBox({
				text: "Allow dragging",
				value: true,
				onValueChanged: function(data) {
					scheduler.option("editing.allowDragging", data.value);
				}
			})
			.dxCheckBox("instance");

		$("#allow-adding").dxCheckBox({
			text: "Allow adding",
			value: true,
			onValueChanged: function(data) {
				scheduler.option("editing.allowAdding", data.value);
			}
		});

		$("#allow-updating").dxCheckBox({
			text: "Allow updating",
			value: true,
			onValueChanged: function(data) {
				var value = data.value;
				scheduler.option("editing.allowUpdating", value);
				dragging.option("disabled", !value);
				resizing.option("disabled", !value);
			}
		});

		$("#allow-deleting").dxCheckBox({
			text: "Allow deleting",
			value: true,
			onValueChanged: function(data) {
				scheduler.option("editing.allowDeleting", data.value);
			}
		});
	});

	return (
		<div className="dx-viewport demo-container">
			<div className="scheduler" />
			<div className="options">
				<div className="caption">Options</div>
				<div className="option switcher-mode">
					<span>View Switcher Mode</span>
					<div id="view-switcher" />
				</div>
				<div className="option">
					<div id="allow-adding" />
				</div>
				<div className="option">
					<div id="allow-updating" />
				</div>
				<div className="option">
					<div id="allow-deleting" />
				</div>
				<div className="option">
					<div id="allow-resizing" />
				</div>
				<div className="option">
					<div id="allow-dragging" />
				</div>
			</div>
		</div>
	);
};
