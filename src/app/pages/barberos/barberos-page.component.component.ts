import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ListaBarberosComponent } from "../../components/lista-barberos/lista-barberos.component";

@Component({
  selector: 'app-barberos-page.component',
  imports: [RouterLink, ListaBarberosComponent],
  templateUrl: './barberos-page.component.html',
})
export class BarberosPageComponent {
}
