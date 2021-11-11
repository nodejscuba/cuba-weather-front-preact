// import Button from '../components/core/CircleButton/CircleButton'
import styled from 'styled-components'
import SideBar from './SideBar/SideBar'
import Input from '../components/core/FormInput/FormInput'

const SectionOverall = styled.section`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-wrap: wrap;
`

const InfoSection = styled.section`
	flex-basis: 0;
	flex-grow: 999;
	min-width: 0%;
	background-color: rgba(16, 14, 29, 0.96);
`

const HomePage = () => {
	return (
		<SectionOverall>
			<SideBar>
				<Input />
			</SideBar>
			<InfoSection />
		</SectionOverall>
	)
}

export default HomePage
