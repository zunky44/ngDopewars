export class Drug {
  name: string;
  minprice: number;
  maxprice: number;
  canbeExpensive: boolean;
  canbeCheap: boolean;

  constructor(name: string) {
    this.name = name;
  }
}
