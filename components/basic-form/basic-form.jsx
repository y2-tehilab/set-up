import styles from './basic-form.module.scss';
import { useForm } from 'react-hook-form';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import TextInput from '../form-inputs/text-input/text-input';

const schema = Joi.object({
  user: {
    name: Joi.string()
      .min(4)
      .message('שם משתמש חייב להיות לפחות 4 תווים')
      .max(6)
      .message('שם משתמש חייב להיות פחות מ-6 תווים')
      .required(),
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
      <input type="submit" value="send" className={styles.sendButton} />
    </form>
  );
}
