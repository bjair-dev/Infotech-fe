import { Component, OnInit } from '@angular/core';
import {CargarScriptsService} from '../cargar-scripts.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public _CargarScriptsService:CargarScriptsService
    ){    
      _CargarScriptsService.Carga(["footer"])}

  ngOnInit(): void {
  }

}
