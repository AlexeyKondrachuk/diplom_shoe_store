import { useNavigate } from "react-router-dom";

function Page404() {
  const navigate = useNavigate();

  return (
    <>
      <p>СТРВНИЦА НЕ НАЙДЕНА</p>
      <span>Извиите такая страница не найдена!</span>
      <button onClick={() => navigate(-1)}>Вернуться назад</button>
    </>
  );
}

export default Page404;
