import { Component, OnInit } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-about",
  imports: [TranslateModule, CommonModule],
  templateUrl: "./about.html",
  styleUrls: ["./about.scss"]
})
export class About implements OnInit {
    features: string[] = [];

    constructor(private translate: TranslateService) {}

    ngOnInit(): void {
        this.loadFeatures();
    }

    private loadFeatures(): void {
        // S'abonner aux changements de langue
        this.translate.onLangChange.subscribe(() => {
            this.extractFeatures();
        });
        
        // Charger les features pour la langue actuelle
        this.extractFeatures();
    }

    private extractFeatures(): void {
        // Récupérer les traductions actuelles
        const translations = this.translate.instant('about.features');
        
        if (translations && typeof translations === 'object') {
            this.features = Object.keys(translations);
        }
    }

    getFeatureTranslation(featureKey: string): string {
        return this.translate.instant(`about.features.${featureKey}`);
    }
}