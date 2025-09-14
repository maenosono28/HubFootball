import type { PositionId } from '@/enums/PositionEnum'

export type Player = {
  id: number
  firstName: string
  lastName: string
  fullName: string
  jerseyNumber: string
  position: PositionId
}
