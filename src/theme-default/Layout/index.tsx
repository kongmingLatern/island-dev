import { useState } from 'react'
export function Layout() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  )
}
