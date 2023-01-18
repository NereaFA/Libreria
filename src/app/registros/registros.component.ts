import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss']
})
export class RegistrosComponent {
  @Input() registros!: any[];
}
