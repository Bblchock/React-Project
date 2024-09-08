import { Email, ExternalLink, Phone, Typography, Contact } from 'shared';

import { Wrapper, Title } from './styles';

export const Contacts = () => {
  return (
    <div>
      <Title>
        <Typography variant="h5" noWrap component="h3">
          Контакты
        </Typography>
      </Title>

      <Wrapper>
        <Contact title="Email">
          <Email to="Bblchock.p.izdat@gmail.com" />
        </Contact>
        <Contact title="Phone">
          <Phone to="+7 999 999 99 99" />
        </Contact>
        <Contact title="GitHub">
          <ExternalLink to="https://github.com/Bblchock">Bblchock</ExternalLink>
        </Contact>
      </Wrapper>
    </div>
  );
};
