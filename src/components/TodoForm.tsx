import React, { useRef } from 'react'
// export const TodoForm: React.FunctionComponent<{
//   onAdd(title: string): void
// }> = props => {

interface TodoFormProps {
  onAdd(title: string): void
}
export const TodoForm: React.FunctionComponent<TodoFormProps> = props => {
  // const [title, setTitle] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null)
  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }
  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      props.onAdd(ref.current!.value)
      ref.current!.value = ''
      // console.log('title:', title)
      // setTitle('')
    }
  }
  return (
    <div className="input-field mt2">
      <input
        onKeyPress={keyPressHandler}
        // onChange={changeHandler}
        // value={title}
        ref={ref}
        type="text"
        id="title"
        placeholder="Введите название дела"
      />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  )
}
