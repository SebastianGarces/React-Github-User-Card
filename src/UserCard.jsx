import React from "react";
import styled from "styled-components";

const UserCard = ({ user }) => {
	const date = new Date(user.created_at)
		.toLocaleDateString("en-US", {
			weekday: "long",
			year: "numeric",
			month: "short",
			day: "numeric"
		})
		.replace(/,/, "");

	return (
		<StyledUserCard>
			<img src={user.avatar_url} alt="user avatar" />
			<div className="text-container">
				<h2 className="name">
					<a href={user.html_url} target="_blank">
						{user.name}
					</a>
				</h2>
				<p className="created small-text">
					{`Github member since `}{" "}
					<span className="date">{` ${date}`}</span>
				</p>
				<p className="summary">
					<span className="name">{user.name}</span> is a{" "}
					<span>{user.bio}</span> located in{" "}
					<span>{user.location}</span>, {`has created `}
					<span>{user.public_repos}</span> repositories and also has{" "}
					<span>{user.followers}</span> followers.
				</p>
			</div>
		</StyledUserCard>
	);
};

const StyledUserCard = styled.div`
	max-width: 700px;
	border-radius: 20px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	display: flex;
	/* flex-direction: column; */
	margin: 0 auto;
	width: fit-content;

	img {
		border-radius: 20px 0 0 20px;
	}

	.text-container {
		padding: 1.5rem 1.5rem 3rem;
		background: white;
		border-radius: 0 20px 20px 0;
		max-width: 400px;

		span {
			color: #217aff;
		}

		.date {
			color: #217aff;
			font-weight: bold;
		}

		.created {
			font-size: 0.9rem;
		}

		.name {
			color: rgba(26, 26, 26, 1);
			a {
				text-decoration: none;
				color: rgba(26, 26, 26, 1);
				font-weight: bold;
			}
		}

		.summary {
			margin-top: 2rem;
			font-size: 1.05rem;
		}
	}
`;

export default UserCard;
