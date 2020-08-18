import { withRouter } from "react-router";
const getState = ({ getStore, setStore }) => {
	return {
		store: {
			token: null,

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			dataProfile: {
				dataOverview: {
					labels: [
						"Intusion Prevention",
						"Bug Detection",
						"Computer Forensics",
						"Network Security",
						"Code Retirement"
					],
					datasets: [
						{
							data: [90, 70, 50, 35, 80],
							fillColor: "transparent",
							strokeColor: "#ed4e7c",
							pointColor: "#ed4e7c"
						}
					]
				},
				dataSkills: {
					labels: ["Data1", "Data2", "Data3", "Data4", "Data5"],
					datasets: [
						{
							data: [10, 20, 30, 40, 50],
							fillColor: "transparent",
							strokeColor: "#ed4e7c",
							pointColor: "#ed4e7c"
						}
					]
				},
				dataProjects: {
					labels: ["Data1", "Data2", "Data3", "Data4", "Data5"],
					datasets: [
						{
							data: [20, 30, 40, 50, 60],
							fillColor: "transparent",
							strokeColor: "#ed4e7c",
							pointColor: "#ed4e7c"
						}
					]
				},
				dataContact: {
					labels: ["Data1", "Data2", "Data3", "Data4", "Data5"],
					datasets: [
						{
							data: [50, 60, 70, 80, 90],
							fillColor: "transparent",
							strokeColor: "#ed4e7c",
							pointColor: "#ed4e7c"
						}
					]
				}
			}
		},
		actions: {
			logout: () => {
				const store = getStore();
				setStore({ token: null });
			},
			login: (email, password) => {
				const store = getStore();
				fetch("https://3000-c022f75b-329b-48d5-8a8e-afbe639c484c.ws-eu01.gitpod.io/login", {
					method: "POST",
					headers: {
						"Access-Control-Allow-Origin": "*",
						"Content-Type": "application/json"
						// add this to any fetch in headers  authorization: "Bearer " + store.token
					},

					body: JSON.stringify({
						password: password,
						email: email
					})
				})
					.then(response => response.json())
					.then(responseJson => {
						if (typeof responseJson.access_token != "undefined") {
							setStore({ token: responseJson.access_token });
							sessionStorage.setItem("token", responseJson.access_token);
							console.log("Manda token : " + store.token);

							document.location.href = "/dashBoard";
							console.log("Guarda en el session : " + sessionStorage.token);
							console.log("Manda token after /dashBoard : " + store.token);
						} else {
							console.log("Error-------> :" + responseJson.access_token);
						}
					});
			},
			isLogged: () => {
				const store = getStore();
				if (sessionStorage.token != null) {
					fetch("https://3000-ade226da-0a6e-4ac8-aefa-797b85d798c4.ws-eu01.gitpod.io/protected", {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							authorization: "Bearer " + sessionStorage.token
						}
					});
					console.log("estas logueado------> :" + sessionStorage.token);
				} else {
					console.log("pero ka pachao!!");
				}
			},

			// signUp: (name, lastname, email, phone, password) => {
			// 	let access_token = localStorage.getItem("access_token");
			// 	// fetch("https://3000-ade226da-0a6e-4ac8-aefa-797b85d798c4.ws-eu01.gitpod.io/user/create", {
			// 	//     method: "POST",
			// 	//     headers: {
			// 	//         "Access-Control-Allow-Origin": "*",
			// 	//         "Content-Type": "application/json"
			// 	//         // add this to any fetch in headers  authorization: "Bearer " + store.token
			// 	//     },

			// 	//     body: JSON.stringify({
			// 	//         name: name,
			// 	//         last_name: lastname,
			// 	//         email: email,
			// 	//         phone: phone,
			// 	//         password: password
			// 	//     })
			// 	// })
			// 	var request = new Request(
			// 		"https://3000-ade226da-0a6e-4ac8-aefa-797b85d798c4.ws-eu01.gitpod.io/user/create",
			// 		{
			// 			method: "POST",
			// 			headers: {
			// 				"Access-Control-Allow-Headers": "Content-Type",
			// 				"Access-Control-Allow-Origin":
			// 					"https://3000-ade226da-0a6e-4ac8-aefa-797b85d798c4.ws-eu01.gitpod.io/user/create",
			// 				"Access-Control-Allow-Methods": "OPTIONS,POST,GET",
			// 				"Content-Type": "application/json"
			// 			},
			// 			body: JSON.stringify({
			// 				name: name,
			// 				last_name: lastname,
			// 				email: email,
			// 				phone: phone,
			// 				password: password
			// 			})
			// 		}
			// 	);
			// 	fetch(request)
			// 		.then(response => response.json())
			// 		.then(responseJson => {});
			// },

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
