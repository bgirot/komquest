import { Component } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { InlineLink } from "../../components/inline-link/inline-link";

@Component({
    selector: "app-legals",
    imports: [TranslateModule, InlineLink],
    templateUrl: "./legals.html",
    styleUrls: ["./legals.scss"]
})
export class Legals {
}