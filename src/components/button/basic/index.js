import Link from 'next/link'

import Button from './Button'

import {BUTTON_TYPES, COLORS, DESIGN_TYPES} from './config.js'

const ButtonBasic = ({
  color = COLORS.PRIMARY,
  children,
  design = DESIGN_TYPES.SOLID,
  disabled = false,
  href,
  onClick = () => {},
  type = BUTTON_TYPES.BUTTON
}) => {
  const commonButtonProps = {children, color, design, disabled}

  if (type === BUTTON_TYPES.LINK && Boolean(href)) {
    return (
      <Link href={href}>
        <Button {...commonButtonProps} />
      </Link>
    )
  }

  if (type === BUTTON_TYPES.BUTTON) {
    return <Button {...commonButtonProps} onClick={onClick} />
  }
}

ButtonBasic.displayName = 'ButtonBasic'

export default ButtonBasic

export {BUTTON_TYPES as buttonBasicTypes, COLORS as buttonBasicColors, DESIGN_TYPES as buttonBasicDesigns}
