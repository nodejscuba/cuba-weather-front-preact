import styled from 'styled-components'

const Input = styled.input`
	background-color: #0a192b;
	color: hsla(177, 87%, 79%, 0.9);
	border: none;
	border-radius: 10px;
	padding: 5px 20px;
	width: 60%;
	height: 40px;
	outline: none;
	font-size: 1rem;
	font-weight: 200;
	letter-spacing: 1px;
	&::placeholder {
		color: hsla(177, 87%, 79%, 0.7);
		font-weight: 200;
	}
`
const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 10px auto;
	height: 200px;
`

const FormInput = () => {
	return (
		<>
			<Form>
				<Input placeholder="Search location..." />
			</Form>
		</>
	)
}

export default FormInput
