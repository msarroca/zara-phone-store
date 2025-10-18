import styles from './index.module.css';

import { COLORS as COLOR_TYPES, DESIGN_TYPES } from './config';

const DESIGNS = {
  [DESIGN_TYPES.OUTLINE]: styles.buttonOutline,
  [DESIGN_TYPES.SIMPLE]: styles.buttonSimple,
  [DESIGN_TYPES.SOLID]: styles.buttonSolid,
};

const COLORS = {
  [COLOR_TYPES.PRIMARY]: '',
  [COLOR_TYPES.ERROR]: styles.buttonColorError,
};

const ButtonBasicComponent = ({ children, color, design, disabled, onClick }) => {
  return (
    <button className={`${DESIGNS[design]} ${COLORS[color]}`} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

ButtonBasicComponent.displayName = 'ButtonBasicComponent';

export default ButtonBasicComponent;
