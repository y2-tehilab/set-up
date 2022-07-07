import styles from './basic-form.module.scss';
import { useForm } from 'react-hook-form';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import TextInput from '../form-inputs/text-input/text-input';
import Toggle from '../form-inputs/toggle/toggle';
import Checkbox from '../form-inputs/checkbox/checkbox';

const schema = Joi.object({
  user: {
    name: Joi.string()
      .min(4)
      .message('שם משתמש חייב להיות לפחות 4 תווים')
      .max(6)
      .message('שם משתמש חייב להיות פחות מ-6 תווים')
      .required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .message('הכנס מייל תקין')
      .required(),
    olderThan18: Joi.bool().required(),
    olderThan25: Joi.bool().required(),
  },
});

export default function BasicForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.basicForm}>
      <TextInput
        title="User Name"
        register={register}
        required
        name="user.name"
        isInvalid={!!errors?.user?.name}
        validationMessage={errors?.user?.name?.message}
      />
      <TextInput
        title="Email"
        type="email"
        register={register}
        required
        name="user.email"
        isInvalid={!!errors?.user?.email}
        validationMessage={errors?.user?.email?.message}
      />
      <Toggle
        title="Older than 18"
        register={register}
        required
        name="user.olderThan18"
        value={true}
        isInvalid={!!errors?.user?.olderThan18}
        validationMessage={errors?.user?.olderThan18?.message}
      />
      <Checkbox
        title="Older than 25"
        register={register}
        required
        name="user.olderThan25"
        value={true}
        isInvalid={!!errors?.user?.olderThan25}
        validationMessage={errors?.user?.olderThan25?.message}
      />
      <input type="submit" value="send" className={styles.sendButton} />
    </form>
  );
}
