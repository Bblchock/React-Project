import { Typography } from 'shared';

import photo from './photo.png';
import { Image } from './styles';

export const About = () => {
  return (
    <>
      <Image
        src={photo}
        alt="Фото вашего будущего сотрудника"
        title="Фото вашего будущего сотрудника"
      />
      <Typography variant="h5" fontWeight={900}>
        Лебаков Кирилл Вячеславович
      </Typography>

      <br />

      <Typography paragraph variant="subtitle1">
        <strong>Дата рождения:</strong> 6.04.1993
      </Typography>
      <Typography paragraph variant="subtitle1">
        <strong>Город:</strong> Калуга
      </Typography>
    </>
  );
};
