import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClassComponent implements OnInit {
  constructor (private router: Router) {}

  ngOnInit(): void {
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

    })
  }
}
