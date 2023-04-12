import { useForm } from "react-hook-form";

function RegistrationForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="fullName">ФИО</label>
      <input type="text" id="fullName" {...register("fullName", { required: true })} />

      <label htmlFor="birthYear">Год рождения</label>
      <select id="birthYear" {...register("birthYear", { required: true })}>
        {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <label htmlFor="gender">Пол</label>
      <select id="gender" {...register("gender", { required: true })}>
        <option value="male">Мужской</option>
        <option value="female">Женский</option>
        <option value="other">Другой</option>
      </select>

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}

export default RegistrationForm