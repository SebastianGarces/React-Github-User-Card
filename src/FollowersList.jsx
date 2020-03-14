import React from "react";
import FollowerCard from "./FollowerCard";
import styled from "styled-components";

const FollowersList = ({ followers }) => {
	return (
		<StyledFollowersList>
			{followers.map(follower => (
				<FollowerCard user={follower} key={follower.id} />
			))}
		</StyledFollowersList>
	);
};

const StyledFollowersList = styled.section`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
`;

export default FollowersList;
