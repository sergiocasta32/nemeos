import React, { Component } from "react";
import { UserProfile } from "./userprofile";
import { Nav } from "../component/navbarmenu";

export const UserProfileView = () => {
	return (
		<div>
			<Nav />
			<UserProfile />
		</div>
	);
};
