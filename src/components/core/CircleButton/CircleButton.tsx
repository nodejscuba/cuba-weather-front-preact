import styled from 'styled-components'

const Button = styled.button`
	border-radius: 50%;
	padding: 15px;
	background-color: #6e707a;
	cursor: pointer;
	color: #fff;
	border: none;
`
const CircleButton = () => {
	return (
		<>
			<Button>°20</Button>
		</>
	)
}
export default CircleButton
