import React from 'react'
import { Button } from 'shared/ui'
import { onClickedSignOut } from '../model'

export const SignOutBtn = () => {
  const onSignOut = () => {
    onClickedSignOut()
  }

  return <Button onClick={onSignOut}>Sign Out</Button>
}
