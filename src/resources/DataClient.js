import data from './data.json';
export default class DataClient {
  constructor(type) {
    this.type = type;
  }
  getData() {
    const keys = Object.keys(data);
    if (keys.indexOf(this.type) === -1) {
      return 'Data not found';
    }
    return data[this.type];
  }
}
