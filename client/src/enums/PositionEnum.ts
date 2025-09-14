// export const Positions = ['GK', 'DF', 'MF', 'FW'] as const
// export type Position = (typeof Positions)[number]

export const Positions = [
  { id: 0, label: 'GK' },
  { id: 1, label: 'DF' },
  { id: 2, label: 'MF' },
  { id: 3, label: 'FW' },
] as const

export type PositionId = (typeof Positions)[number]['id']
