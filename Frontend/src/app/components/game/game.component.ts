import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game/game.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  game = {title: "Cyberpunk 2077", img: "https://sm.ign.com/ign_es/release/c/cyberpunk-/cyberpunk-2077-xbox-one_tnvw.jpg", price: "59.99", downloads: "5,000,000", description: "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. Assume the role of V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you. Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City. Take the riskiest job of your life and go after a prototype implant that is the key to immortality.", stat: "5.0"}

  constructor(
    private toastr: ToastrService,
    private gameService: GameService,
    public dialogRef: MatDialogRef<GameComponent>
  ) { }

  ngOnInit(): void {
  }

  getInfoGame(data: any) {
    this.gameService.getInfoGame(data).subscribe((res: any) => {
      this.game = res.data
    }, err => {
      this.toastr.error(err.error.message);
    })
  }

  getBuyGame(data: any) {
    this.gameService.buyGame(data).subscribe((res: any) => {
      this.toastr.success(res.message)
    }, err => {
      this.toastr.error(err.error.message);
    })
  }

}
