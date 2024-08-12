import './NumBadge.css'

export const NumBadge = ({className, value=0}) => {
  let cl = 'numBadge'
  if(className) cl +=` ${className}`

  if(Number(value)>0) cl += ' numBadge--active'

  return (
    <span className={cl}>{value}</span>
  )
}
