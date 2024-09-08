import { Typography } from 'shared';

export const Education = () => {
  return (
    <>
      <Typography variant="h6" fontWeight={900}>
        Образование:
      </Typography>

      <Typography paragraph variant="subtitle1">
        Высшее(Бакалавр)
      </Typography>
      <Typography paragraph variant="subtitle1">
        Год окончания: 2015
      </Typography>
      <Typography paragraph variant="subtitle1">
        Калужский государственный университет им.К.Э.Циолковского
      </Typography>
      <Typography paragraph variant="subtitle1">
        Инженерно - педагогический факультет, Менеджмент организации
      </Typography>
    </>
  );
};
