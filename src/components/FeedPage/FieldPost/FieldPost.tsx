import React, { ChangeEvent } from 'react'

import styles from './FieldPost.module.css';



interface PropsType {
  placeholder?: string,
  isExtended?: boolean 
  onChange: (value: string) => void,
}


export const FieldPost = (props: PropsType) => {
  const { placeholder, isExtended = false, onChange } = props

  const [text, setText] = React.useState('')

  const onChangePost = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value.trim())
  }

  React.useEffect(() => {
    onChange(text)
  }, [text, onChange])

  return (
    <div className={styles.wrapper}>
      <input 
        type="text" 
        placeholder={placeholder} 
        onChange={onChangePost}
      />
    </div>
  )
}
