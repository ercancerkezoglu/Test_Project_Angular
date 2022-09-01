import { Injectable } from '@angular/core';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
filteredData:Result []=[];
  constructor() { }

setFilteredData(_filteredData:any){
  this.filteredData = _filteredData;
}
getFilteredData(){
  return this.filteredData;
}


}

