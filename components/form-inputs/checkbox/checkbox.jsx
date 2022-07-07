import { useState } from 'react';
import styles from './checkbox.module.scss';

export default function Checkbox({
  register,
  isInvalid = false,
  title,
  name,
  isRequired = false,
  disabled = false,
  validationMessage = '',
  value = false,
}) {
  const [checked, setChecked] = useState(value);

  return (
    <label
      className={`${styles.checkboxBox} inputBox ${isInvalid && 'invalid'}`}
    >
      <input
        className={styles.checkbox}
        {...register(name, { required: isRequired })}
        disabled={disabled}
        type="checkbox"
        checked={checked}
        onChange={({ target }) => setChecked(target.checked)}
      />
      <span className="labelText">{title}</span>
      {isInvalid && (
        <span className="validationMessage">
          {validationMessage || 'שגיאה במילוי השדה'}
        </span>
      )}
    </label>
  );
}
