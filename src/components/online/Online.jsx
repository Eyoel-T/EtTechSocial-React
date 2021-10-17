import React from "react";

export default function Online({ user }) {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	return (
		<li className="rightbarFriend">
			<div className="rightbarProfileImgContainer">
				<img
					src={PF + user.profilePicture}
					alt=""
					className="rightbarProfileImg"
				/>
				<span className="rightBarOnline"></span>
			</div>
			<span className="rightbarUsername">{user.username}</span>
		</li>
	);
}
