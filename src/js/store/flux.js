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
			]
		},
		actions: {
			logout: () => {
				const store = getStore();
				setStore({ token: null });
			},
			login: (email, password) => {
				const store = getStore();
				fetch("https://3000-d3112155-094b-4b43-ab8c-2139015b2329.ws-eu01.gitpod.io/login", {
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

							document.location.href = "/single";
							console.log("Guarda en el session : " + sessionStorage.token);
							console.log("Manda token after /single : " + store.token);
						} else {
							console.log("Error-------> :" + responseJson.access_token);
						}
					});
			},
			isLogged: () => {
				const store = getStore();
				if (sessionStorage.token != null) {
					fetch("https://3000-d3112155-094b-4b43-ab8c-2139015b2329.ws-eu01.gitpod.io/protected", {
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
