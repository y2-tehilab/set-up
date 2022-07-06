## Forms:

- install react-hook-form

  ```bash
  yarn add react-hook-form
  ```

- install @hookform/resolvers - in order to connect joi validations schema to react-hook-form

  ```bash
  yarn add @hookform/resolvers joi
  ```

- install joi - for validations

  ```bash
  yarn add joi
  ```

- Copy the relevant inputs from `components/form-inputs` - this is the inputs of the form you can custom the style and the code by your needs, and also create new input component if you need.

- Create form component, there is example in `components/basic-form`

  - if you need validation use packages: `joi` and `@hookform/resolvers/joi`

    ```jsx
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
            name={'user.name'}
            isInvalid={!!errors?.user?.name}
            validationMessage={errors?.user?.name?.message}
          />
          <input type="submit" value="send" className={styles.sendButton} />
        </form>
      );
    }
    ```

    - Validation messages

      - after each call to joi validation method, call `message()` mathod with the relevant validation message:

        ```jsx
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
        ```

      - sent to input component the error message:

        ```jsx
        <TextInput
          title="User Name"
          register={register}
          required
          name="user.name"
          isInvalid={!!errors?.user?.name}
          validationMessage={errors?.user?.name?.message}
        />
        ```

    - In order to create object inside the main object:
      - create object structure in joi validation:
        ```jsx
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
        ```
      - make field name with `.` like:
        ```jsx
        <TextInput
          title="User Name"
          register={register}
          required
          name="user.name"
          isInvalid={!!errors?.user?.name}
          validationMessage={errors?.user?.name?.message}
        />
        ```

- For more options look at:
  - [react-hook-form](https://react-hook-form.com/)
  - [joi](https://joi.dev/api)
