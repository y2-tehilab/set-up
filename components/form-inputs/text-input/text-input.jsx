import styles from './text-input.module.scss';

export default function TextInput({
  register,
  isInvalid = false,
  title,
  name,
  isRequired = false,
  disabled = false,
  placeholder,
  value = '',
  validationMessage = '',
}) {
  return (
    <label className={styles.textInput}>
      <span className={styles.labelText}>{title}</span>
      <input
        className={`${styles.input} ${isInvalid && styles.invalid}`}
        {...register(name, { required: isRequired })}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={value}
      />
      {isInvalid && (
        <span className={styles.validationMessage}>
          {validationMessage || 'שגיאה במילוי השדה'}
        </span>
      )}
    </label>
  );
}
