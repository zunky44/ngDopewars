export class Game {
  public locations = [];
  public currentLocation: string;
  public drugstobuy = [];
  public drugstosell = [];
  public tabIndex: number;
  public playerMoney: number;
  public playerDebt: number;
  public date: number;
  public space: number;
  public bank: number;
  public gun: string;
  public health: number;
  public bitches: number;
  public gross: number;
  constructor( public playername: string ) { }
}
