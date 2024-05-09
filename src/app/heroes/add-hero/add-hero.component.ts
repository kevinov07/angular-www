import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestService } from '../../services/http-request.service';


@Component({
  selector: 'app-add-hero',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './add-hero.component.html',
  styleUrl: './add-hero.component.css',
  providers: [HttpRequestService],
})
export class AddHeroComponent {
 constructor(private _http_service: HttpRequestService) {}

  public myService(): any {
    console.log('Llamando al servicio');
    this._http_service
      .postRequestWithParams('Yilmar', 'yilmar.alzate@correounivalle.edu.co')
      .subscribe((data: any) => {
        console.log(`Data en la peticion: `, data);
      });
  }

  public heroe: any = {
    nombre: 'My Hero!!',
    poder: 2,
  };

  public hazClick(): any {
    console.log('capturando el formulario:', this.heroe);
  }
}