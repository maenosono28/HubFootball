import { type IHttpClient } from './httpClient'
import type { Player } from '@/type/Player'

export class PlayerService {
  constructor(private http: IHttpClient) {}

  async getPlayers(): Promise<Player[]> {
    const res = await this.http.get<Player[]>('/players')
    console.log(res.data)
    return res.data
  }
}
