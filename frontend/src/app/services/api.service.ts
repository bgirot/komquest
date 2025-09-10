import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiUrl = 'https://www.strava.com/api/v3';

    constructor(private http: HttpClient) {}

    getUser(token: string): Observable<any> {
        return this.http.get(`${this.apiUrl}/athlete`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    getNearbySegments(token: string, bounds: number[], activityType: string, min_cat: number = 0, max_cat: number = 5): Observable<any> {

        return this.http.get(`${this.apiUrl}/segments/explore?bounds=${bounds.join(',')}&activity_type=${activityType}&min_cat=${min_cat}&max_cat=${max_cat}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
}