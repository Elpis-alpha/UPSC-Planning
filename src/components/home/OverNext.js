import styled from "styled-components"

import { v4 } from "uuid"

const OverNext = ({ remove, subjectData: data }) => {

	const rating = [
		{
			name: "Weak",
			ava: [100, 0, 0],
			color: "#fd755e"
		},
		{
			name: "Average",
			ava: [100, 100, 50],
			color: "#ffd504"
		},
		{
			name: "Improvement",
			ava: [100, 100, 0],
			color: "#ff993f"
		},
		{
			name: "Cutoff level",
			ava: [100, 100, 100],
			color: "#a8c7f5"
		},
	]

	return (

		<OverNextStyle>

			<div className="inner">

				<div className="initial">

					<div className={"sub " + (data.active ? 'active ' : "") + (data.locked ? 'locked' : "")}>

						<div className="name">

							{data.name}

							{data.locked && <div className="l-ico"></div>}

						</div>

						<div className="prog">

							{data.strength.map(str => <div className="hol" key={v4()}><div className="bar" style={{ width: `${str}%`, backgroundColor: data.color }}></div></div>)}

						</div>

						<div className="on-bl"></div>

					</div>

				</div>

				<div className="top">

					<div className="un" >Strength Bar</div>

					<div className="txt">Introducing strength bar to help you know your week subjects.</div>

					<div className="x" onClick={() => remove()}></div>

				</div>

				<div className="mid">

					<div className="mid-cont">

						{rating.map(rate => <div key={v4()} className="rating">

							<div className="head">{rate.name}</div>

							<div className="prog">

								{rate.ava.map(str => <div className="hol" key={v4()}><div className="bar" style={{ width: `${str}%`, backgroundColor: rate.color }}></div></div>)}

							</div>

						</div>)}

					</div>

				</div>

				<div className="end">

					<div className="ll" onClick={() => remove()}>Finish</div>

				</div>

			</div>

		</OverNextStyle>

	)

}

const OverNextStyle = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0,0,0,.3);
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 500;

	.initial {

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

			.on-bl {
				width: 3px;
				height: 44px;
				left: 1pc;
				background: linear-gradient(180deg, #FC5D73, #FF993F);
			}
		}
	}

	.inner {
		position: absolute;
		top: 172px;
		left: 16.63px;
		width: 260px;
		/* border-radius: 12px; */
		overflow: hidden;
		margin: auto 0;
	}
	
	.top {
		border-radius: 12px 12px 0 0 ;
		background: linear-gradient(137deg, #FC5D73, #FF993F);
		color: #fff;
		padding: 0 20px;
		
		.un {
			font-size: 16px;
			line-height: 18px;
			padding-top: 26px;
			padding-bottom: 12px;
		}
		
		.txt {
			font-size: 14px;
			line-height: 18px;
			padding-bottom: 18.5px;
		}

		.x {
			position: absolute;
			top: 13px;
			right: 15px;
			height: 10.5px;
			width: 10.5px;
			background-image: url('/svg/close-f.svg');
			cursor: pointer;
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
	}

	.mid {
		background-color: #fff5eb;
		padding-top: 15px;
		padding-bottom: 15px;

		.mid-cont {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;

		}

		.rating {
			width: 50%;
			padding: .5pc 1pc;
			font-size: 12px;
			line-height: 14px;
			color: #3A3752;
			font-weight: bold;

			.head {
				padding-bottom: 0.3pc;
			}
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
	}
	
	.end {
		border-radius: 0 0 12px 12px;
		background: linear-gradient(137deg, #FC5D73, #FF993F);
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding: 18.67px 15px;

		.ll {
			width: 82px;
			height: 30px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 12px;
			font-weight: bold;
			line-height: 14px;
			border-radius: 7px;
			cursor: pointer;
			background-color: #FFFFFF;
		}
	}
`

export default OverNext
