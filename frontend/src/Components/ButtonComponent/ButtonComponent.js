import React from 'react'
import './ButtonComponent.css'

export default function ButtonComponent({ buttonText, buttonType, onClick }) {
  const buttonClass =
    buttonType === 'containerButton' ? 'containerButton'
      : buttonType === 'SecondaryButton' ? 'SecondaryButton'
        : buttonType === 'FooterButton' ? 'FooterButton'
          : buttonType === "AboutUsbutton" ? 'AboutUsbutton'
            : 'FreeButton'

  return (
    <div >
      <button onClick={onClick} className={buttonClass} >{buttonText}</button>
    </div>
  )
}
