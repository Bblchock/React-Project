import { useState } from 'react';

import { observer } from 'mobx-react-lite';

import { ButtonGroup, ButtonsWrapper } from './styles';

import { Button } from 'shared';

import {
  propertiesFilters,
  filtersByRung,
  DEFAULT_FILTER,
  createFilterStore,
} from 'data';

export const Filter = observer(() => {
  const [
    {
      isAllSelected,
      changeProperties,
      filtersContain,
      resetFilters,
      isSelectedRung,
      changeFilterByRung,
    },
  ] = useState(createFilterStore);

  return (
    <ButtonsWrapper role="toolbar" aria-label="Фильтры чемпионов">
      <ButtonGroup key="reset" role="group" aria-label="Сброс фильтров">
        <Button
          key={'resetButton'}
          onClick={() => resetFilters()}
          isActive={isAllSelected}
          aria-label="Показать всех чемпионов"
        >
          {DEFAULT_FILTER}
        </Button>
      </ButtonGroup>
      <ButtonGroup key="rung-filter" role="group" aria-label="Фильтр по рангу">
        {filtersByRung.map(({ id, title }) => (
          <Button
            key={id}
            onClick={() => changeFilterByRung(id)}
            isActive={isSelectedRung(id)}
            aria-label={`Фильтр по рангу: ${title}`}
          >
            {title}
          </Button>
        ))}
      </ButtonGroup>
      {Object.entries(propertiesFilters).map(([buttonBlock, buttonList]) => (
        <ButtonGroup
          key={`${buttonBlock}-filter`}
          role="group"
          aria-label={`Фильтр по ${buttonBlock === 'position' ? 'позиции' : 'роли'}`}
        >
          {buttonList.map(({ id, title }) => (
            <Button
              key={id}
              onClick={() => changeProperties(id)}
              isActive={filtersContain(id)}
              aria-label={`${buttonBlock === 'position' ? 'Позиция' : 'Роль'}: ${title}`}
            >
              {title}
            </Button>
          ))}
        </ButtonGroup>
      ))}
    </ButtonsWrapper>
  );
});
