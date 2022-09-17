import styled from "styled-components"
import VeryTop from "./home/VeryTop"
import TopLayer from "./home/TopLayer"
import SubjectsList from "./home/SubjectsList"
import { v4 } from "uuid"
import { useState } from "react"
import TheList from "./home/TheList"
import OverBegin from "./home/OverBegin"


const Home = () => {

	const [subjectDataList, setSubjectDataList] = useState([
		{
			id: v4(),
			name: "History",
			strength: [100, 0, 0],
			color: "#FD755E",
			active: true,
			showUnlock: false,
			locked: false,
			bought: true,
		},
		{
			id: v4(),
			name: "Civics",
			strength: [100, 100, 0],
			color: "#FF993F",
			active: false,
			showUnlock: true,
			locked: false,
			bought: false,
		},
		{
			id: v4(),
			name: "Geo",
			strength: [100, 100, 50],
			color: "#FFD504",
			active: false,
			showUnlock: false,
			locked: false,
			bought: false,
		},
		{
			id: v4(),
			name: "Pol. Sci",
			strength: [100, 100, 100],
			color: "#569EFE",
			active: false,
			showUnlock: false,
			locked: false,
			bought: false,
		},
	])

	const [showBegin, setShowBegin] = useState(true)


	return (

		<HomeStyle>

			<VeryTop />

			<TopLayer />

			<div className="plan">Planning</div>

			<SubjectsList {...{ subjectDataList, setSubjectDataList }} />

			<TheList {...{ subjectDataList, setSubjectDataList }} />

			{showBegin && <OverBegin remove={() => setShowBegin(false)} />}

		</HomeStyle>

	)

}

const HomeStyle = styled.div`

	width: 393px;
	height: 851px;
	margin: auto 0;
	background-color: #fff;

	.plan {
		font-size: 30px;
		height: 33px;
		margin-top: 18px;
		padding-left: 16px;
	}

`

export default Home
