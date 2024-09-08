import { Typography } from 'shared';

export const Experience = () => {
  return (
    <>
      <Typography variant="h6" fontWeight={900}>
        Опыт работы:
      </Typography>
      <br />

      <ul>
        <li>
          <Typography paragraph variant="subtitle1" fontWeight={900}>
            Астрал-Софт(АО Калуга Астрал)
          </Typography>
        </li>

        <Typography paragraph variant="subtitle1" fontWeight={800}>
          Frontend разработчик
        </Typography>
        <Typography paragraph variant="subtitle1">
          Поддержка внутреннего продукта
        </Typography>

        <li>
          <Typography paragraph variant="subtitle1" fontWeight={900}>
            Астрал-Софт(АО Калуга Астрал)
          </Typography>
        </li>

        <Typography paragraph variant="subtitle1" fontWeight={800}>
          Старший технический специалист
        </Typography>
        <Typography paragraph variant="subtitle1">
          Консультации клиентов по техническим вопросам программного обеспечения
          бухгалтерской отчётности.
        </Typography>

        <li>
          <Typography paragraph variant="subtitle1" fontWeight={900}>
            Билайн(ПАО Вымпелком)
          </Typography>
        </li>

        <Typography paragraph variant="subtitle1" fontWeight={800}>
          Старший специалист по управлению качеством сервиса
        </Typography>
        <Typography paragraph variant="subtitle1">
          Прослушивание контактов на предмет корректности консультаций,
          предоставление обратной связи, аналитика по прослушанным звонкам.
          Поиск и устранение неточностей/недоработок процессов и процедур
          компании, предложения по улучшению/исправлению и сопровождение
          реализации.Организация встреч и процессов по анализу проблемных
          тематик у сотрудников.
        </Typography>

        <li>
          <Typography paragraph variant="subtitle1" fontWeight={900}>
            Билайн(ПАО Вымпелком)
          </Typography>
        </li>

        <Typography paragraph variant="subtitle1" fontWeight={800}>
          Специалист оперативного обслуживания клиентов
        </Typography>
        <Typography paragraph variant="subtitle1">
          Консультации клиентов по вопросам домашнего интернета, телевидения по
          технологии FTTB и мобильной связи. Финансовые и диагностические
          вопросы проблем с подключением, продажи услуг компании новым и
          действующим клиентам.
        </Typography>
      </ul>
    </>
  );
};
