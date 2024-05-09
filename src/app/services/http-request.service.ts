import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  constructor(private http: HttpClient) {}

  postQueryWithParamsAuth(query: string, bodyParams: any) {
    const url_base = `https://web.linkisite.com`;
    const localToken = `3d49cc93baf1722763d`;
    const url = `${url_base}/${query}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localToken}`,
    });
    //const bodyParams = params;
    return this.http.post(url, bodyParams, { headers });
  }

  postRequestWithParams(name: string, email: string) {
    const requestData = {
      name,
      email,
      token: 'untokenenelbody',
    };
    return this.postQueryWithParamsAuth(
      `users/emailacctrecover`,
      requestData
    ).pipe(
      map((resp) => {
        return resp;
      })
    );
  }
}