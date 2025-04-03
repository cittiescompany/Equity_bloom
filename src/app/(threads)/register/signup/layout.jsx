import React from 'react'
import RequiredAuth from '@/components/core/shared/RequiredAuth'

const layout = ({children}) => {
  return (
    <RequiredAuth>{children}</RequiredAuth>
  )
}

export default layout