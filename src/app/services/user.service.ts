import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserDTO } from "../domains/user.domain";


import { environment } from "../../env/enviroment"
import { ReponseModel } from "../domains/response";

@Injectable({
    providedIn: 'root',
})
export class UserService {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    constructor(private http : HttpClient) {}
    findAllUserIsDeletedFalse() : Observable<ReponseModel<UserDTO[]>>{
        return this.http
                    .get<ReponseModel<UserDTO[]>>
                                (`${environment.host}${environment.userService}/users`)
    }
}