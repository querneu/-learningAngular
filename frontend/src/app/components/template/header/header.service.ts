import { HeaderData } from './../footer/header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Inicio',
    icon: 'home',
    routeUrl: ''
  })
  constructor() { }


  get headerData():HeaderData{
    return this._headerData.value
  }

  set headerData(headerdata: HeaderData){
    this._headerData.next(headerdata)
  }
}
