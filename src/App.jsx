import React, { Component } from "react";
import axios from "axios";

import FollowersList from "./FollowersList";
import UserCard from "./UserCard";
import UserSearchForm from "./UserSearchForm";

const DUMMY_USER = {
	avatar_url: "https://avatars3.githubusercontent.com/u/53976701?v=4",
	name: "Sebastian Garces",
	location: "North Ridgeville, OH",
	followers: 21,
	public_repos: 44,
	url: "https://api.github.com/users/SebastianGarces",
	created_at: "2019-08-10T16:03:03Z",
	html_url: "https://github.com/SebastianGarces",
	bio: "Full Stack Web Development & Computer Science Student @ Lambda School"
};

export default class App extends Component {
	state = {
		userSearch: "",
		user: {},
		followers: []
	};

	onSearch = user => {
		console.log("app.js onSearch:");
		this.setState({ ...this.state, userSearch: user });
	};

	withAxios = () => {
		axios
			.get(`https://api.github.com/users/${this.state.userSearch}`)
			.then(response => {
				console.log(response);
				this.setState({ ...this.state, user: response.data });
				return response.data.followers_url;
			})
			.then(followers => {
				console.log(followers);
				axios
					.get(followers)
					.then(followersArray => {
						console.log("FollowersArray", followersArray);
						followersArray.data.forEach(follower => {
							axios
								.get(
									`https://api.github.com/users/${follower.login}`
								)
								.then(res =>
									this.setState({
										...this.state,
										followers: [
											...this.state.followers,
											res.data
										]
									})
								)
								.catch(err => console.log("Error: ", err));
						});
					})
					.catch(err => console.log("Error", err));
			})
			.catch(err => {
				console.log("Error", err);
			});
	};

	componentDidUpdate(prevProps, prevState) {
		if (this.state.userSearch !== prevState.userSearch) {
			this.withAxios();
		}
		console.log("FOLLOWERS: ", this.state.followers);
	}

	render() {
		return (
			<main>
				<UserSearchForm onSearch={this.onSearch} state={this.state} />
				{this.state.userSearch !== "" && (
					<UserCard user={this.state.user} />
				)}

				{this.state.userSearch !== "" && <h1>Followers</h1>}

				{this.state.userSearch !== "" && (
					<FollowersList followers={this.state.followers} />
				)}
			</main>
		);
	}
}
