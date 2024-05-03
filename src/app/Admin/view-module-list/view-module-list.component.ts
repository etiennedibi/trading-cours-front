import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Observable, first, map } from 'rxjs';
import { Chapitre } from 'src/app/models/chapitre.models';
import { ChapitreService } from 'src/app/services/chapitre.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';


declare var $: any;
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


@Component({
  selector: 'app-view-module-list',
  templateUrl: './view-module-list.component.html',
  styleUrls: ['./view-module-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewModuleListComponent implements OnInit {
  chapitres: Chapitre [] = [];
  chapitres$!: Observable<Chapitre[]>;

  constructor (private chapitreService: ChapitreService,
              private router: Router) {}

  ngOnInit(): void {

    this.chapitres$ = this.chapitreService.getAllChapitres();

    $(document).ready(function () {


      //POPUP AND HORIZONTAL MENU
      $(".bi-x-lg").click(function() {
        $(".cover-bloc").css("display", "none");
        $(".popup-menu-social").css("display", "none");
      });
      $(".btn-grid").click(function() {
        $(".cover-bloc").css("display", "flex");
        $(".popup-complet-profil").css("display", "none");
        $(".popup-menu-social").css("display", "flex");
      });


    });

  }

}
