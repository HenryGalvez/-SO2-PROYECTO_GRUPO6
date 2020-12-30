import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GameService } from 'src/app/services/game/game.service';
import { MatTableDataSource } from '@angular/material/table';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-create-games',
  templateUrl: './create-games.component.html',
  styleUrls: ['./create-games.component.css']
})
export class CreateGamesComponent implements OnInit {

  formG = new FormGroup({
    title: new FormControl(null,
      Validators.required
    ),
    price: new FormControl(null,
      Validators.required
    ),
    description: new FormControl(null,
      Validators.required
    ),
    img: new FormControl(null,
      Validators.required
    )
  })

  games = [];

  dataSource = new MatTableDataSource<any>(this.games);
  displayedColumns: string[] = ['id', 'name', 'price'];

  constructor(
    private gameService: GameService,
    private storeService: StoreService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getAllGames()
  }

  getAllGames() {
    this.storeService.getStoreGames().subscribe((res: any) => {
      this.games = res.data
      this.dataSource.data = this.games
    }, err => {
      this.toastr.error("Error");
    })
  }

  createGame(){
    if(this.formG.invalid){
      this.toastr.error("Invalid form");
      return;
    }
    var send = {
      title: this.formG.value.title,
      price: this.formG.value.price,
      img: this.formG.value.img,
      description: this.formG.value.description,
      downloads: 0
    }
    this.gameService.insertGame(send).subscribe((res: any) => {
      this.toastr.success(res.message);
      this.formG.reset()
      this.getAllGames()
    }, err => {
      this.toastr.error("Error");
    })

  }

  get description() {
    return this.formG.get('description');
  }
  get title() {
    return this.formG.get('title');
  }

  get price() {
    return this.formG.get('price');
  }

  get img() {
    return this.formG.get('img');
  }

}
