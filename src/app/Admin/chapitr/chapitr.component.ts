import { Component, OnInit, Input } from '@angular/core';
import { Chapitre } from 'src/app/models/chapitre.models';
import { ChapitreService } from 'src/app/services/chapitre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapitr',
  templateUrl: './chapitr.component.html',
  styleUrls: ['./chapitr.component.scss']
})
export class ChapitrComponent implements OnInit {
  @Input() chapitre!: Chapitre;

  constructor(private chapitreService: ChapitreService,
              private router: Router) {}

  ngOnInit(): void {

  }

  onViewChapitre() {
    this.router.navigateByUrl(`boards/modules/view/${this.chapitre.id}`)
  }

}
