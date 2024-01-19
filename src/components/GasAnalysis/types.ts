export type Zone = {
  start: number;
  end: number;
  color: string;
  danger?: boolean;
  dangerLabel?: string;
};

export type Zones = Zone[];
