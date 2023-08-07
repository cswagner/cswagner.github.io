import { useCallback, useState } from 'react'

const CounterPage = () => {
  const { count, increment } = useCounter()

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default CounterPage

const useCounter = () => {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => setCount((count) => count + 1), [])

  return { count, increment }
}
