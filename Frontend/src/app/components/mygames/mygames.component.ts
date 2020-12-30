import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GameService } from 'src/app/services/game/game.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mygames',
  templateUrl: './mygames.component.html',
  styleUrls: ['./mygames.component.css']
})
export class MygamesComponent implements OnInit {

  games = [
    {title: "Cyberpunk 2077", img: "https://sm.ign.com/ign_es/release/c/cyberpunk-/cyberpunk-2077-xbox-one_tnvw.jpg", price: "59.99"},
    {title: "GTA V", img: "https://static.wikia.nocookie.net/esgta/images/1/1b/Car%C3%A1tula_GTA_V.jpg/revision/latest?cb=20130402191528", price: "29.99"},
    {title: "Horizon Zero Dawn", img: "https://cdn2.unrealengine.com/egs-horizonzerodawncompleteedition-guerrilla-s2-1200x1600-371960884.jpg", price: "19.99"},
  ]

  constructor(
    private gameService: GameService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getMyGames()
  }

  getMyGames(){
    this.gameService.getMyGames([]).subscribe((res: any)=>{
      this.games = res.data;
    },err => {
      this.toastr.error("Error");
    })
  }

}
