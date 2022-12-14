import { useEffect, useMemo } from "react"
import { useState } from "react"
import styled from "styled-components"
import { v4 } from "uuid"

const TheList = ({ subjectDataList, setSubjectDataList }) => {

	const [subject, setSubject] = useState(subjectDataList.find(x => x.active))

	const goodData = useMemo(() => [
		{
			id: v4(),
			name: "ART & CULTURE",
			chapter: "Chapter 1",
			loaded: false,
			percent: 100,
			showLine: false
		},
		{
			id: v4(),
			name: "ART & CULTURE",
			chapter: "Chapter 1",
			loaded: false,
			percent: 100,
			showLine: true
		},
		{
			id: v4(),
			name: "ART & CULTURE",
			chapter: "Chapter 1",
			loaded: true,
			percent: 85,
			showLine: true
		},
		{
			id: v4(),
			name: "ART & CULTURE",
			chapter: "Chapter 1",
			loaded: true,
			percent: 0,
			showLine: true
		}
	], [])

	const badData = useMemo(() => [
		{
			id: v4(),
			name: "ART & CULTURE",
			chapter: "Chapter 1",
			loaded: false,
			percent: 0,
			showLine: false
		},
		{
			id: v4(),
			name: "ART & CULTURE",
			chapter: "Chapter 1",
			loaded: false,
			percent: 0,
			showLine: true
		},
		{
			id: v4(),
			name: "ART & CULTURE",
			chapter: "Chapter 1",
			loaded: true,
			percent: 0,
			showLine: true
		},
		{
			id: v4(),
			name: "ART & CULTURE",
			chapter: "Chapter 1",
			loaded: true,
			percent: 0,
			showLine: true
		}
	], [])

	const [chapters, ss] = useState(goodData)

	useEffect(() => {

		const sub = subjectDataList.find(x => x.active)

		setSubject(sub)

		if (!sub.bought) {

			ss(badData)

		} else {

			ss(goodData)

		}

	}, [subjectDataList, goodData, badData])

	const buySubject = id => {

		const newData = subjectDataList.map(x => {

			x.bought = x.id === id ? true : x.bought

			x.locked = !x.bought

			return x

		})

		setSubjectDataList(newData)

	}

	const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {

		const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

		return {

			x: centerX + (radius * Math.cos(angleInRadians)),

			y: centerY + (radius * Math.sin(angleInRadians))

		};

	}

	const createPath = percent => {

		const opts = {

			cx: 26,

			cy: 26,

			radius: 26,

			start_angle: 0,

			end_angle: (percent / 100) * 360,

			thickness: 3

		};

		const start = polarToCartesian(opts.cx, opts.cy, opts.radius, opts.end_angle);

		const end = polarToCartesian(opts.cx, opts.cy, opts.radius, opts.start_angle);

		const largeArcFlag = opts.end_angle - opts.start_angle <= 180 ? "0" : "1";

		const cutout_radius = opts.radius - opts.thickness;

		const start2 = polarToCartesian(opts.cx, opts.cy, cutout_radius, opts.end_angle);

		const end2 = polarToCartesian(opts.cx, opts.cy, cutout_radius, opts.start_angle);

		const d = [
			"M", start.x, start.y,
			"A", opts.radius, opts.radius, 0, largeArcFlag, 0, end.x, end.y,
			"L", opts.cx, opts.cy,
			"Z",

			"M", start2.x, start2.y,
			"A", cutout_radius, cutout_radius, 0, largeArcFlag, 0, end2.x, end2.y,
			"L", opts.cx, opts.cy,
			"Z"
		].join(" ");

		return d
	}

	return (

		<TheListStyle>

			{subject && <div>

				{!subject.bought && <div className="n-bought">

					<div className="cont-1">

						<div className="b-lock"></div>

						<div className="txt">Now you can unlock one more subject to boost your preparation</div>

						<div className="un" onClick={() => buySubject(subject.id)}>Unlock Subject</div>

					</div>

					<div className="cont-2">

						<span>Note: You can only unlock one subject</span>

					</div>

				</div>}

				<div className="sub-chap">

					{chapters.map(chapter => <div key={chapter.id} className={"chapter"}>

						<div className={"icon-part " + (chapter.percent === 0 ? "off " : "")}>

							<div className={"ic " + (chapter.percent === 0 ? "off " : "") + (chapter.percent === 100 ? "on " : "")}>

								{chapter.showLine && <div className={"line " + (chapter.percent === 0 ? "off " : "") + (chapter.percent === 100 ? "on " : "")}></div>}

								<div className={"round " + (chapter.percent === 0 ? "off " : "") + (chapter.percent === 100 ? "on " : "") + ((chapter.percent > 0 && chapter.percent < 100) ? "pro-all " : "")}>

									<div className={"in-r " + (chapter.percent === 0 ? "off " : "") + (chapter.percent === 100 ? "on " : "")}></div>

									{(chapter.percent > 0 && chapter.percent < 100) && <div className="pro">

										<div className="in-pro"></div>

										<div className="out-pro">

											<svg viewBox="0 0 52 52" width="52" height="52">

												<path id="arc" fill="#53D08D" stroke="none" fillRule="evenodd" d={createPath(chapter.percent)} />

											</svg>

										</div>

									</div>}

								</div>

							</div>

						</div>

						<div className="text-part">

							<div className="heading">

								{chapter.name}

							</div>

							<div className="minor">

								{chapter.chapter}

							</div>

						</div>

						<div className={"end-part " + (chapter.percent === 0 ? "off " : "") + (chapter.loaded ? "yup " : "nope ")}>

							<div className={"inn-eed " + (chapter.percent === 0 ? "off " : "") + (chapter.loaded ? "yup " : "nope ")}></div>

						</div>

						<div className="e-line"></div>

					</div>)}

				</div>

			</div>}

		</TheListStyle>

	)

}

const TheListStyle = styled.div`
	width: 100%;
	margin-top: 40px;

	.n-bought {
		width: 100%;
		padding-left: 15.5px;
		padding-right: 16px;
		margin-bottom: 24.8px;

		.cont-1{
			display: flex;
			align-items: center;
			background-color: #FFF5EBCC;
			padding: 20px 9.83px 20.5px 10px;
			border-radius: 10px;

			.b-lock {
				width: 32px;
				height: 32px;
				display: inline-block;
				background-image: url('/svg/b-lock.svg');
				background-position: center;
				background-repeat: no-repeat;
			}

			.txt {
				font-size: 12px;
				line-height: 18px;
				color: #3A3752;
				font-weight: bold;
				width: 214px;
				padding-left: 8px;
				padding-right: 5px;
				flex: 1;
			}

			.un {
				color: #fff;
				cursor: pointer;
				border: 0 none;
				background: linear-gradient(90deg, #FC5D73, #FF993F);
				border-radius: 6px;
				height: 25px;
				width: 82px;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 8px;
				line-height: 9px;
			}
		}

		.cont-2{
			display: flex;
			align-items: center;
			text-align: center;
			padding: 10px 0;
			background-color: #FFF5EBCC;
			border-radius: 10px;
			height: 34px;
			margin-top: 6.5px;

			span {
				color: #FD755E;
				width: 100%;
				display: inline-block;
				font-size: 12px;
				line-height: 14px;
			}
		}
	}

	.sub-chap {
		padding: 0 19.83px;

		.chapter {
			overflow: visible;
			display: flex;
			align-items: flex-start;

			&:first-of-type {

				.icon-part {
					margin-top: 0px;
				}

				.text-part {

					.heading {
						margin-top: 0;
					}
				}
			}

			.icon-part {
				display: flex;
				overflow: visible;
				margin-top: 44.5px;

				.line {
					position: absolute;
					bottom: 52px;
					left: 25px;
					width: 2px;
					height: 69px;
					background-color: #58D492;

					&.off {
						background-color: #DADADA;
					}
				}

				.round {
					width: 52px;
					height: 53px;
					background-color: #21CE72;
					border-radius: 50%;
					background: #fff;
					border: 3px solid #53D08D;
					display: flex;
					align-items: center;
					justify-content: center;

					.in-r {
						z-index: 25;
						background-image: url('/svg/c-done.svg');
						background-position: center;
						background-repeat: no-repeat;
						width: 22.52px;
						height: 22.52px;
						background-size: contain;
					}
					
					&.on {
						border: 0px solid #DADADA;
						background: linear-gradient(93deg, #21CE72, #8CDAB0);
						
						.in-r {
							background-image: url('/svg/c-done-f.svg');
						}
					}
					
					&.off {
						border: 3px solid #DADADA;

						.in-r {
							background-image: url('/svg/c-lock.svg');
						}
					}

					&.pro-all {
						border: 0 none;
						
						.pro {
							z-index: 15;
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							bottom: 0;
							background-color: #DADADA;
							border-radius: 50%;

							display: flex;
							align-items: center;
							justify-content: center;
							
							.out-pro {
								position: absolute;
								top: 0px; bottom: 0px;
								right: 0px; left: 0px;
								background-color: transparent;
								border-radius: 50%;
								z-index: 10;
								clip-path: circle(50%);
							}
							
							.in-pro {
								z-index: 15;
								position: absolute;
								top: 3px; bottom: 3px;
								right: 3px; left: 3px;
								background-color: #fff;
								border-radius: 50%;
							}
						}
					}
				}
			}

			.text-part {
				padding-left: 15px;
				padding-top: 7px;

				.heading {
					margin-top: 44.5px;
					height: 20px;
					display: flex;
					align-items: center;
					font-size: 18px;
					line-height: 17px;
					color: #2E2E2E;
					font-weight: bold;
					margin-bottom: 5px;
				}

				.minor {
					font-size: 14px;
					line-height: 14px;
					color: #2E2E2E;
					height: 15px;
					opacity: .6;
					display: flex;
					align-items: center;
					margin-bottom: 29.5px;
				}
			}

			.end-part {
				background-color: red;
				width: 38px;
				height: 38px;
				margin: auto;
				margin-right: 0;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;

				&.nope {
					background-color: #FFF5EB;

					.inn-eed {
						width: 17px; 
						height: 16px;
						background-image: url('/svg/rotate-cw.svg');
						background-size: contain;
						background-position: center;
						background-repeat: no-repeat;
					}
				}

				&.yup {
					background: linear-gradient(92deg, #FC5D73, #FF993F);

					.inn-eed {
						width: 13px; 
						height: 13px;
						background-image: url('/svg/arrow-right.svg');
						background-size: contain;
						background-position: center;
						background-repeat: no-repeat;
					}
				}

				&.off {
					background: #DADADA;
				}
			}

			.e-line {
				position: absolute;
				bottom: 0;
				right: 9.25px;
				height: 2px;
				width: 278px;
				background-color: #DADADA;
			}
		}
	}
`

export default TheList
