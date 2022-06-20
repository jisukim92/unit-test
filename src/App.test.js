import { render, screen } from '@testing-library/react'
import App from './App'

// test('renders learn react link', () => {
//   render(<App />)
//   const linkElement = screen.getByText(/learn react/i)
//   expect(linkElement).toBeInTheDocument()
// })

//test파일 이름은 xxx.test.jsx?
test('App이 render된 경우 Hello World가 출력되어야한다', () => {
  const { queryByText } = render(<App />)
  const helloWorld = queryByText('Hello World')
  expect(helloWorld).toBeInTheDocument()
})

test('App이 render된 경우 red class를 가진 div가 출력되어야 한다', () => {
  const { container } = render(<App />)
  const div = container.querySelector('div.red') //querySelector는 의존성이 깨지기 쉽다 data-test-id나 getbyRole를 많이 쓴다
  // const div = screen.getByTestId('blue-red')
  expect(div).toBeInTheDocument()
})

test('1 + 3은 4이다', () => {
  expect(1 + 3).toBe(4)
})

// input Element를 하나 만들고 change 이벤트 발생했을 때 결과를 테스트
const App = () => {
  cosnt[(value, setValue)] = useState('')
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <input onChange={handleChange} />
      <div data-testid='value'>{value}</div>
    </div>
  )
}

test('아무것도 타이핑 하지 않으면 빈문자열을 render', () => {
  render(<App />)
  const helloWorld = screen.getByTestId('value')
  expect(helloWorld).toBeInTheDocument()
  expert(helloWorld.textContent).toBe('')
})
