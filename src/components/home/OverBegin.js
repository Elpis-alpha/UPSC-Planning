import styled from "styled-components"

const OverBegin = ({ remove }) => {

	return (

		<OverBeginStyle>

			<div className="inner">

				<div className="top">

					<div className="un" >Subject Unlocked</div>

					<div className="txt">Now you can unlock one more subject to boost your preparation</div>

				</div>

				<div className="mid">

					<div className="im-hol"></div>

					<div className="un" >Subject Unlocked</div>

					<div className="cont-2">

						<span>Note: You can only unlock one subject</span>

					</div>

				</div>

				<div className="end">

					<div className="ll" onClick={() => remove()}>Let's Go</div>

				</div>

			</div>

		</OverBeginStyle>

	)

}

const OverBeginStyle = styled.div`
position: absolute;
padding: 0 16px;
top: 0;
left: 0;
bottom: 0;
right: 0;
background-color: rgba(0,0,0,.3);
height: 100%;
display: flex;
align-items: center;
justify-content: center;
z-index: 600;

	.inner {
		border-radius: 12px;
		overflow: hidden;
		margin: auto 0;
	}
	
	.top {
		background: linear-gradient(137deg, #FC5D73, #FF993F);
		color: #fff;
		padding: 0 20px;
		
		.un {
			font-size: 20px;
			font-weight: bold;
			line-height: 21px;
			padding-top: 26px;
			padding-bottom: 12px;
		}
		
		.txt {
			font-size: 14px;
			line-height: 21px;
			padding-bottom: 20px;
		}
	}

	.mid {
		background-color: #fff5eb;
		padding-top: 23px;
		padding-bottom: 15px;

		.un {
			font-weight: bold;
			font-size: 20px;
			font-weight: bold;
			line-height: 21px;
			text-align: center;
			padding-top: 1pc;
			padding-bottom: .5pc;
		}

		.im-hol {
			height: 5pc;
			margin: 0 auto;
			width: 5pc;
			background-image: url('/svg/green.svg');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}

		.cont-2{
			display: flex;
			align-items: center;
			text-align: center;
			padding: 10px 0;
			width: 80%;
			background-color: #ffe8dd;
			border-radius: 10px;
			height: 34px;
			margin: 0 auto;
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
	
	.end {
		background: linear-gradient(137deg, #FC5D73, #FF993F);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 26px 0;

		.ll {
			width: 295px;
			display: inline-block;
			padding: 17px 112px;
			font-size: 18px;
			font-weight: bold;
			line-height: 20px;
			border-radius: 14px;
			cursor: pointer;
			background-color: #FFFFFF;
		}
	}
`

export default OverBegin
