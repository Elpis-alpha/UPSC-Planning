import styled from "styled-components"

const VeryTop = () => {

	return (

		<VeryTopStyle>

			<div className="inner">

				<svg width="46" height="10" version="1.1" xmlns="http://www.w3.org/2000/svg">

					<path
						d="
							M 0, 0
							10, 0
							10, 10
							0, 10
							"
					/>

					<path
						d="
							M 23, 5
							m -5, 0
							a 5,5 0 1,0 10,0
							a 5,5 0 1,0 -10,0
							"
					/>

					<path
						d="
							M 36, 0
							46, 0
							41, 10
							"
					/>
				</svg>

			</div>

		</VeryTopStyle>

	)

}

const VeryTopStyle = styled.div`
	width: 100%;
	height: 26px;
	line-height: 26px;

	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-right: 8px;

	color: #3F3F3F;

	svg {
		fill: #3F3F3F;
	}
`

export default VeryTop
