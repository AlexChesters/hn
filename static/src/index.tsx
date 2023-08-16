import React from 'react'
import { createRoot } from 'react-dom/client'

import Router from './router'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const root = createRoot(document.getElementById('app'))
root.render(<Router />)
