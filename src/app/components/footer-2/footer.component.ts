import { Component, OnInit } from '@angular/core';
import {CargarScriptsService} from '../../cargar-scripts.service';

@Component({
  selector: 'mg-footer-v2',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent2 implements OnInit {

  constructor(public _CargarScriptsService:CargarScriptsService
    ){    
      _CargarScriptsService.Carga(["footer"])}

  ngOnInit(): void {
  }

}
