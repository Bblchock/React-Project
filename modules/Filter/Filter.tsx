import { useState } from 'react';

import {
  propertiesFilters,
  filtersByRung,
  DEFAULT_FILTER,
  createFilterStore,
} from 'data';
import { observer } from 'mobx-react-lite';
import { Button } from 'shared';

import { ButtonGroup, ButtonsWrapper } from './styles';

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
    <ButtonsWrapper>
      <ButtonGroup key="reset">
        <Button
          key={'resetButton'}
          onClick={() => resetFilters()}
          isActive={isAllSelected}
        >
          {DEFAULT_FILTER}
        </Button>
      </ButtonGroup>
      <ButtonGroup key="rung-filter">
        {filtersByRung.map(({ id, title }) => (
          <Button
            key={id}
            onClick={() => changeFilterByRung(id)}
            isActive={isSelectedRung(id)}
          >
            {title}
          </Button>
        ))}
      </ButtonGroup>
      {Object.entries(propertiesFilters).map(([buttonBlock, buttonList]) => (
        <ButtonGroup key={`${buttonBlock}-filter`}>
          {buttonList.map(({ id, title }) => (
            <Button
              key={id}
              onClick={() => changeProperties(id)}
              isActive={filtersContain(id)}
            >
              {title}
            </Button>
          ))}
        </ButtonGroup>
      ))}
    </ButtonsWrapper>
  );
});
