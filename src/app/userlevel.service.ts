import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http'

import 'rxjs/add/operator/map';


@Injectable()
export class UserlevelService {

    constructor(
        @Inject('API_URL') private url: string,
        private http: Http
    ) { }

    getAllUserLevel() {
        return new Promise((resolv, reject) => {
            this.http.get(`${this.url}/userlevel`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }

    save(UserLevelId: any, UserLevelName: any){
        return new Promise((resolve, reject) => {
            this.http.post(`${this.url}/userlevel`, {
                ul_id: UserLevelId,
                ul_name: UserLevelName
            })
            .map(res => res.json())
            .subscribe(data => {
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }

    edit(UserLevelId: any, UserLevelName: any) {
        return new Promise((resolve, reject) => {
            this.http.put(`${this.url}/userlevel`, {
                ul_id: UserLevelId,
                ul_name: UserLevelName
            })
            .map(res => res.json())
            .subscribe(data => {
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }

    remove(UserLevelId: any) {
        return new Promise((resolve, reject) => {
            this.http.delete(`${this.url}/userlevel/${UserLevelId}`)
            .map(res => res.json())
            .subscribe(data => {
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
}
