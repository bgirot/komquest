import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { HttpClient } from '@angular/common/http';

interface Runner {
  rank: string;
  name: string;
  PR: string;
}

@Component({
  selector: 'app-runner-table',
  standalone: true,
  imports: [TableModule],
  template: `
    <div class="card">
      <p-table [value]="runners" [tableStyle]="{ 'min-width': '50rem' }">

        <ng-template pTemplate="header">
          <tr>
            <th>Rank</th>
            <th>Nom</th>
            <th>PR</th>
          </tr>
        </ng-template>

        <ng-template pTemplate="body" let-runner>
          <tr>
            <td>{{ runner.rank }}</td>
            <td>{{ runner.name }}</td>
            <td>{{ runner.PR }}</td>
          </tr>
        </ng-template>

      </p-table>
    </div>
  `
})
export class RunnerTableComponent implements OnInit {

  runners: Runner[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Runner[]>('assets/runners.json')
      .subscribe(data => {
        this.runners = data;
      });
  }
}
