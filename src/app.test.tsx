import { render } from '@testing-library/preact'
import { App } from './app'

describe('app', () => {
	test('renders the app', () => {
		const testMessage = 'Learn Preact'
		const { getByText } = render(<App />)
		expect(getByText(testMessage)).not.toBeNull()
	})
})
