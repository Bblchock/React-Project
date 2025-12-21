import { Name, UiCard, Img, CardProps } from './styles';

export const Card = ({ rung, name, imgUrl, ...props }: CardProps) => {
  return (
    <UiCard rung={rung} name={name} imgUrl={imgUrl} {...props}>
      <Img src={imgUrl} alt={`picture of ${name}`} />
      <Name>{name}</Name>
    </UiCard>
  );
};
