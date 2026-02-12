import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { HttpClient } from '@angular/common/http';

interface Runner {
  rank: string;
  name: string;
  PR: string;
}

@Component({
  selector: 'app-liffre',
  standalone: true,
  imports: [TableModule],
  template: `
    <div class="card compact-card">

      <h3 class="title">Scouting Semi-Marathon de Liffré</h3>

      <p-table 
        [value]="runners"
        stripedRows
        class="compact-table"
      >

        <ng-template pTemplate="header">
          <tr>
            <th>#</th>
            <th>Nom</th>
            <th>PR</th>
          </tr>
        </ng-template>

        <ng-template pTemplate="body" let-runner let-rowIndex="rowIndex">
          <tr>
            <td class="rank">{{ rowIndex + 1 }}</td>
            <td>{{ runner.name }}</td>
            <td>
              <span class="pr-badge">
                {{ runner.PR }}
              </span>
            </td>
          </tr>
        </ng-template>

      </p-table>

    </div>
  `,
  styles: [`
    .compact-card {
      padding: 0.75rem 1rem;
    }

    .title {
      margin: 0 0 0.75rem 0;
      font-size: 1.1rem;
    }

    /* Réduction padding cellules */
    :host ::ng-deep .compact-table .p-datatable-thead > tr > th,
    :host ::ng-deep .compact-table .p-datatable-tbody > tr > td {
      padding: 0.4rem 0.6rem;
      font-size: 0.9rem;
    }

    .rank {
      font-weight: 600;
      color: var(--primary-color);
      width: 50px;
    }

    .pr-badge {
      background: var(--primary-color);
      color: white;
      padding: 0.15rem 0.5rem;
      border-radius: 12px;
      font-size: 0.75rem;
    }
  `]
})
export class Liffre implements OnInit {

  runners: Runner[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Runner[]>('assets/ranked_liffre.json')
      .subscribe(data => {
        this.runners = data;
      });
  }
}
