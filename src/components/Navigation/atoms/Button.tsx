type ButtonProps = {
    text: string,
    classname: string
}

export const Button = ({text, classname}: ButtonProps) => {
  return (
   <button className={classname} >{text}</button>
  )
}
