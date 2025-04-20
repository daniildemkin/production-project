import { classNames } from 'helpers/classNames/classNames'
import { FC, lazy, Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { useTheme } from 'theme/useTheme'

// Используем динамические импорты для страниц
const AboutPage = lazy(() => import('pages/About/About'))
const MainPage = lazy(() => import('pages/Main/Main'))

const App: FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Change theme</button>
      <br />
      <Link to="/">Main</Link>
      <span> - </span>
      <Link to="/about">About</Link>
      <br />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/about"
            element={<AboutPage />}
          />
          <Route
            path="/"
            element={<MainPage />}
          />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
