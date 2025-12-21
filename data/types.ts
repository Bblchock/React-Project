import { PositionFilter, RoleFilter } from './enums';

export type Champion = {
  id: number;
  name: string;
  rung: string;
  position: PositionFilter[];
  role: RoleFilter[];
  img: string;
};
