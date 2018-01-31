export class Game {
  public locations = [];
  public currentLocation: string;
  public drugstobuy = [];
  public drugstosell = [];
  public tabIndex: number;
  constructor( public playername: string ) { }
}
