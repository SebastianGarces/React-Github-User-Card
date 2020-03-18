import React from "react";
import styled from "styled-components";

const FollowerCard = ({ user }) => {
	const date = new Date(user.created_at)
		.toLocaleDateString("en-US", {
			weekday: "long",
			year: "numeric",
			month: "short",
			day: "numeric"
		})
		.replace(/,/, "");

	return (
		<StyledFollowerCard>
			<img src={user.avatar_url} alt="user avatar" />
			<div className="text-container">
				<h3 className="name">
					<a href={user.html_url} target="_blank">
						{user.name}
					</a>
				</h3>
				<p className="created small-text">
					{`Github member since `}{" "}
					<span className="date">{` ${date}`}</span>
				</p>
			</div>
		</StyledFollowerCard>
	);
};

const StyledFollowerCard = styled.div`
	min-width: 500px;
	border-radius: 20px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	display: flex;
	/* flex-direction: column; */
	margin: 0 auto;
	width: fit-content;
	max-height: 150px;
	margin: 1.5rem 1.5rem;
	overflow: hidden;

	img {
		border-radius: 20px 0 0 20px;
		width: 150px;
	}

	.text-container {
		padding: 1.5rem 1.5rem 3rem;
		background: white;
		border-radius: 0 20px 20px 0;
		width: 100%;
		max-width: 350px;
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
	}
`;

export default FollowerCard;
