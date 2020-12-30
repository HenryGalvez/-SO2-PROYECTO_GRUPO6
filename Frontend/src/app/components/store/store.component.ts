import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GameService } from 'src/app/services/game/game.service';
import { MatDialog } from '@angular/material/dialog';
import { GameComponent } from '../game/game.component';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  games = [
    {title: "Cyberpunk 2077", img: "https://sm.ign.com/ign_es/release/c/cyberpunk-/cyberpunk-2077-xbox-one_tnvw.jpg", price: "59.99", downloads: "4,000,00", description: "lorem ipsum"},
    {title: "GTA V", img: "https://static.wikia.nocookie.net/esgta/images/1/1b/Car%C3%A1tula_GTA_V.jpg/revision/latest?cb=20130402191528", price: "29.99", downloads: "4,000,00", description: "lorem ipsum"},
    {title: "Horizon Zero Dawn", img: "https://cdn2.unrealengine.com/egs-horizonzerodawncompleteedition-guerrilla-s2-1200x1600-371960884.jpg", price: "19.99", downloads: "4,000,00", description: "lorem ipsum"},
    {title: "Apex Legends", downloads: "4,000,00", description: "lorem ipsum", img: "data:image/jpeg;base64,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", price: "0.00"},
  ]

  constructor(
    private gameService: StoreService,
    private toastr: ToastrService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(){
    this.gameService.getStoreGames()
    .subscribe((res: any) => {
      this.games = res.data
    },err => {
      console.log(err);
      this.toastr.error(err.error.message)
    })
  }

  openDialog(data: any) {
    const dialogRef = this.dialog.open(GameComponent, {
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getGames();
    });
  }

}
