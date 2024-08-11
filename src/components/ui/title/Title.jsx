import './Title.css'

export const Title = ({type='h1',children}) => {

  let TITLE

  switch (type) {
    case 'h1':
      TITLE = <h1 className='title title--h1'>{children}</h1>
      break
    case 'h2':
      TITLE = <h2 className='title title--h2'>{children}</h2>
      break
    case 'h3':
      TITLE = <h3 className='title title--h3'>{children}</h3>
      break
    case 'h4':
      TITLE = <h4 className='title title--h4'>{children}</h4>
      break
    case 'h5':
      TITLE = <h5 className='title title--h5'>{children}</h5>
      break
    case 'h6':
      TITLE = <h6 className='title title--h6'>{children}</h6>
      break
  
    default:
      TITLE = <div className='title title--text'>{children}</div>
      break
  }

  return TITLE
}
