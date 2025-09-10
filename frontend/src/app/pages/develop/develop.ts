import { Component, OnInit } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { CommonModule } from "@angular/common";
import { ApiService } from "../../services/api.service"; 

@Component({
  selector: "app-about",
  imports: [TranslateModule, CommonModule],
  templateUrl: "./develop.html",
  styleUrls: ["./develop.scss"]
})
export class Develop {

    constructor(private translate: TranslateService, public apiService: ApiService) {
    }

    getUser(): void {
        const resultElement = document.getElementById('request-result');
        const profilPicture = document.getElementById('profile-picture');
        let inputElement : string = (<HTMLInputElement>document.getElementById('input-token')).value;

        if (resultElement) {
            this.apiService.getUser(inputElement).subscribe(
                data => {
                    // Prettier result
                    const user = data;
                    resultElement.innerText = `${user.firstname} ${user.lastname} (${user.city})`;
                    profilPicture?.setAttribute('src', user.profile);
                    profilPicture?.style.setProperty('display', 'block');
                },
                error => {
                    resultElement.innerText = `Error: ${error.message}`;
                    profilPicture?.style.setProperty('display', 'none');
                }
            );
        } else {
            console.error('No element found with id "request-result"');
            profilPicture?.style.setProperty('display', 'none');
        }
    }

    getNearbySegments(): void {
        const profilPicture = document.getElementById('profile-picture');
        profilPicture?.style.setProperty('display', 'none');
        const resultElement = document.getElementById('request-result');
        let inputElement : string = (<HTMLInputElement>document.getElementById('input-token')).value;

        if (resultElement) {
            const bounds = [48.145050, -1.784524, 48.227742, -1.742414];
            const activityType = 'run';
            this.apiService.getNearbySegments(inputElement, bounds, activityType).subscribe(
                data => {
                    const segments = data.segments
                        .sort((a: any, b: any) => a.distance - b.distance)
                        .map((segment: any) => `- ${segment.name} (${(segment.distance / 1000).toFixed(2)} km)`);

                    resultElement.innerText = segments.join("\n");
                },
                error => {
                    resultElement.innerText = `Error: ${error.message}`;
                }
            );
        } else {
            console.error('No element found with id "request-result"');
            profilPicture?.style.setProperty('display', 'none');
        }
    }
}