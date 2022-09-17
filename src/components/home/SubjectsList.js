import styled from "styled-components"
import { v4 } from "uuid"


const SubjectsList = ({ subjectDataList, setSubjectDataList }) => {

	const makeActive = id => {

		if (subjectDataList.find(x => x.id === id).locked) return false

		const newData = subjectDataList.map(x => {

			x.active = x.id === id

			return x

		})

		setSubjectDataList(newData)

	}

	return (

		<SubjectsListStyle>

			{subjectDataList.map(data => <div key={data.id} className={"sub " + (data.active ? 'active ' : "") + (data.locked ? 'locked' : "")}>

				<div className="name" onClick={() => makeActive(data.id)}>

				{data.name}

				{data.locked && <div className="l-ico"></div>}

				</div>

				<div className="prog">

					{data.strength.map(str => <div className="hol" key={v4()}><div className="bar" style={{ width: `${str}%`, backgroundColor: data.color }}></div></div>)}

				</div>

			</div>)}

		</SubjectsListStyle>

	)

}

const SubjectsListStyle = styled.div`
	width: 100%;
	margin-top: 26px;
	overflow: auto;
	white-space: pre;
	padding: 0 16.33px;

	::-webkit-scrollbar {
		width: 0px;
		height: 0px;
	}

	.sub {
		display: inline-block;
		margin-right: 15.67px;
		width: 107px;

		.name {
			white-space: pre;
			cursor: pointer;
			border-radius: 9px;
			height: 32px;
			margin-bottom: 6px;
			text-align: center;
			font-size: 16px;
			line-height: 18px;
			padding: 8px 21px 6px 22px;
			color: #C6C6C6;
			border: 1px solid #DADADA;
		}

		.prog {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.hol {
				background-color: #DADADA;
				height: 4px;
				width: 32%;
				border-radius: 2px;
				overflow: hidden;

				.bar {
					height: 100%;
				}
			}
		}

		&.active {

			.name {
				color: #fff;
				border: 0 none;
				background: linear-gradient(90deg, #FC5D73, #FF993F);
			}
		}

		&.locked {

			.name {
				cursor: not-allowed;
				color: #929292;
				background: #DADADA;
			}

			.l-ico {
				display: inline-block;
				margin-left: 6px;
				height: 12.73px;
				width: 9.7px;
				background-image: url('/svg/lock.svg');
				background-position: center;
				background-repeat: no-repeat;
			}
		}
	}
`

export default SubjectsList
