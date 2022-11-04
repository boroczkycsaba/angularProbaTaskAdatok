import {Injectable} from '@angular/core';

@Injectable()
export class DataStoreServiceService {
  constructor() {
  }

  storeData(dataKey: string, dataToSave: any): void {
    const jsonConvertedData = JSON.stringify(dataToSave);
    console.debug('Elmentett adat kulcs', dataKey);
    console.debug('Elmentett adat', jsonConvertedData);
    localStorage.setItem(dataKey, jsonConvertedData);
  }

  loadData(dataKey: string): any {
    console.debug('Beolvasandó adat kulcs', dataKey);
    const loadedData = localStorage.getItem(dataKey);
    if (loadedData === null || loadedData === '') {
      return loadedData;
    }
    return JSON.parse(loadedData);
  }

  removeData(dataKey: string): void {
    localStorage.removeItem(dataKey);
  }
}
