import React, { useState } from "react";
import styled from "styled-components";

const UserSearchForm = props => {
	console.log(props);
	const [search, setSearch] = useState("");

	const handleChange = e => {
		e.preventDefault();
		setSearch(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		props.onSearch(search);
		setSearch("");
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			<label htmlFor="search">Github User</label>
			<input
				type="text"
				value={search}
				onChange={handleChange}
				placeholder="search for a new user..."
			/>
			<button type="submit">Search</button>
		</StyledForm>
	);
};

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 200px;
	margin: 0 auto 1rem;

	label {
		font-size: 1.5rem;
		color: white;
		position: relative;
		/* text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); */

		&::after {
			content: "";
			width: 100%;
			height: 140px;
			background: skyblue;
			position: absolute;
			top: 0rem;
			left: 0.7rem;
			z-index: -1;
			transform: skew(20deg);
		}
	}

	input {
		padding: 0.5rem 1rem;
		width: 100%;
		border-radius: 3px;
		border: none;
	}

	button {
		padding: 0.5rem 2rem;
		margin-top: 0.5rem;
		border-radius: 3px;
		border: none;
		background: #217aff;
		color: white;
		transition: all 200ms ease-in-out;

		&:hover {
			background-color: #2174f0;
			transition: all 200ms ease-in-out;
			transform: scale(1.05);
		}
		&:active {
			transition: all 200ms ease-in-out;
			transform: scale(1);
		}
	}
`;

export default UserSearchForm;
