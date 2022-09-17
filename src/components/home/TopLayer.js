import { useState } from "react"
import styled from "styled-components"

const TopLayer = () => {

	const [showInput, setShowInput] = useState(false)

	return (

		<TopLayerStyle>

			<div className="inner">

				<div className="f-ico"></div>

				<div className={"n-f " + (showInput ? "hide" : "")}>

					<span>UPSC</span>

					<div className="v-ico"></div>

				</div>

				<div className="search">

					<div className={"box " + (showInput ? "show" : "")}>

						<input type="text" placeholder="Search here..." />

						<div className="x-ico" onClick={() => setShowInput(false)}></div>

					</div>

					<div className={"icon " + (showInput ? "hide" : "")} onClick={() => setShowInput(true)}></div>

				</div>

				<div className="c-hol">

					<div className="coin"></div>

				</div>

				<div className="val">2400</div>

			</div>

		</TopLayerStyle>

	)

}

const TopLayerStyle = styled.div`
	width: 100%;
	padding-top: 27px;

	.inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 42px;

		.f-ico {
			width: 42px;
			height: 42px;
			margin-left: 5px;
			background-image: url('/svg/ham.svg');
			background-position: center;
			background-repeat: no-repeat;
		}

		.n-f {
			font-size: 10px;
			line-height: 15px;
			font-weight: bold;
			border: 1px dashed #eee;
			padding: 3px 7px;
			padding-right: 17px;
			border-radius: 8px;
			opacity: 1;
			transition: opacity .5s;
	
			.v-ico {
				position: absolute;
				top: 0;
				bottom: 0;
				right: 4px;
				width: 10px;
				background-image: url('/svg/arr.svg');
				background-position: center;
				background-repeat: no-repeat;
			}

			&.hide {
				opacity: 0;
			}
		}

		.search {
			flex: 1;
			height: 42px;
			z-index: 15;

			.box {
				position: absolute;
				top: 0;
				bottom: 0;
				right: 0;
				width: 224px;
				/* overflow: hidden; */
				opacity: 0;
				z-index: 5;
				transition: opacity .5s;
				display: flex;
				justify-content: flex-end;

				input {
					border: 1px solid #2E2E2E;
					font-size: 14px;
					line-height: 14px;
					border-radius: 23px;
					padding: 14px 20px;
					padding-bottom: 13px;
					width: 0px;
					margin-left: auto;
					transition: width .5s;
					padding-right: 32px;
				}

				&.show {
					z-index: 15;
					opacity: 1;

					input {
						width: 224px;
					}

					.x-ico {
						position: absolute;
						top: 12px; bottom: 14px;
						right: 14px;
						height: 16px;
						width: 16px;
						background-image: url('/svg/close.svg');
						background-position: center;
						background-repeat: no-repeat;
					}
				}
			}
			
			.icon {
				z-index: 10;
				margin-left: auto;
				height: 42px;
				width: 42px;
				background-image: url('/svg/search.svg');
				background-position: center;
				background-repeat: no-repeat;
				background-size: 18px;
				opacity: 1;
				transition: opacity .5s;

				&.hide {
					opacity: 0;
				}
			}
		}

		.c-hol {
			padding-left: 13px;
			padding-right: 10px;
			display: flex;
			align-items: center;
			justify-content: center;

			.coin {
				background-image: url('/images/Coin.png');
				width: 26px;
				height: 26px;
				background-position: center;
				background-size: contain;
				background-repeat: no-repeat;
			}
		}

		.val {
			font-size: 18px;
			line-height: 18px;
			padding-right: 26px;
			font-weight: bold;
		}
	}

`

export default TopLayer
