import './Paragraphe.css'

export const Paragraphe = ({children, textSize}) => {
  let ParagrapheStyle = {}
  if(textSize) {
    ParagrapheStyle.fontSize = `${textSize}px`
    ParagrapheStyle.lineHeight = `${textSize}px`
  }
  return <p className="paragraphe" style={ParagrapheStyle}>{children}</p>
}
