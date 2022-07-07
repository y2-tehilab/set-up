// import styles from './text-input.module.scss';

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
  type = 'text',
}) {
  return (
    <label className={`inputBox ${isInvalid && 'invalid'}`}>
      <span className="labelText">{title}</span>
      <input
        className="input"
        {...register(name, { required: isRequired })}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={value}
        type={type}
      />
      {isInvalid && (
        <span className="validationMessage">
          {validationMessage || 'שגיאה במילוי השדה'}
        </span>
      )}
    </label>
  );
}
