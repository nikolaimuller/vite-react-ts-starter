import { useState } from 'react'

import { Button } from '@components/button'

export const App = (): React.ReactElement => {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Hello Vite React!</h1>

        <div className="mt-5">
          <Button onClick={() => setCount((count) => count + 1)}>{`count is: ${count}`}</Button>
        </div>

        <p className="mt-5">
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>

        <p className="mt-3">
          <a
            className="text-sm text-blue-600 font-bold hover:underline"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="text-sm text-blue-600 font-bold hover:underline"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}
