import { useMemo, memo } from 'react';

import { observer } from 'mobx-react-lite';
import { championsStore, type Champion } from 'data';

import { Card } from './Card';
import { ChampionsWrapper } from './styles';

const MemoizedCard = memo(Card);

export const Champions = observer(() => {
  const { champions } = championsStore;

  const championCards = useMemo(
    () =>
      champions.map((obj: Champion) => (
        <MemoizedCard
          rung={Number(obj.rung)}
          key={obj.id}
          imgUrl={obj.img}
          name={obj.name}
        />
      )),
    [champions],
  );

  return <ChampionsWrapper>{championCards}</ChampionsWrapper>;
});
