import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TFetchByPix } from '../../types/TFetchByPix';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchbypixService {

  constructor(private httpClient: HttpClient) { }

  fetch(chave: string):Observable<TFetchByPix>{
    return this.httpClient.get<TFetchByPix>(`${environment.apiUrl}/Cliente/chavepix/${chave}`);
  }
}
