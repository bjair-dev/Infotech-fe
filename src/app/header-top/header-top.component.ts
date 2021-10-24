import { Component, OnInit } from '@angular/core';
import {CargarScriptsService} from '../cargar-scripts.service';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss']
})
export class HeaderTopComponent implements OnInit {

  constructor(public _CargarScriptsService:CargarScriptsService
    ){    
      _CargarScriptsService.Carga(["section"])}

  ngOnInit(): any {
    
  }


}
