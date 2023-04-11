import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from 'src/app/@shared/services/users.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, OnDestroy {
  constructor(private usersService: UsersService) {}

  ngOnDestroy() {}

  ngOnInit() {
    this.usersService.getUsers().subscribe((users) => {
      console.log(users);
    });
  }
}
