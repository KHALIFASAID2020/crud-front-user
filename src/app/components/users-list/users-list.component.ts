import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserCrudService } from 'src/app/services/user-crud.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
users : User[]
currentUser = null;
currentIndex = -1;
title = 'UserName';

  constructor(private userService:UserCrudService) { }

  ngOnInit(): void {
    console.log("in inti===========>");
    
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.userService.getAllUsers()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveUsers();
    this.currentUser = null;
    this.currentIndex = -1;
  }

  setActiveUser(user, index): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

  removeAllUsers(): void {
    /*this.tutorialService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });*/
  }

  searchTitle(): void {
    /*this.tutorialService.findByTitle(this.title)
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });*/
  }
}
