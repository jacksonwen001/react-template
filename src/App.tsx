import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Router, useRoutes } from 'react-router-dom'
import { routes } from '@/routes'

function App() {
  const  routers   = useRoutes(routes)
  return (
      <> {routers} </>
  )
}

export default App
