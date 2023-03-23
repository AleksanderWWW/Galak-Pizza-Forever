import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserLogin} from "../models/userLogin.model";
import {Router} from "@angular/router";
import {NotificationService} from "../service/notification.service";
import {NotificationType} from "../models/notification-type.enum";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit, OnDestroy{
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  public showLoading = false;

  user: UserLogin = {
    email:'',
    password:''
  };

  constructor(
    private router :Router,
    private notificationService: NotificationService
  ) { }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }


  login(): void {
    this.user = this.form.value;
    if(this.form.valid) {
      if(this.user.email === 'admin@mail.com' && this.user.password === 'admin') {
        this.notificationService.notify(NotificationType.SUCCESS, 'Admin exists!');
        this.router.navigateByUrl('admin-main-app');
      } else if(this.user.email === 'citizen@mail.com' && this.user.password === 'citizen') {
        // this.notificationService.notify(NotificationType.SUCCESS, 'Citizen exists!');
        this.router.navigateByUrl('citizen-dashboard');
      } else {
        this.notificationService.notify(NotificationType.ERROR, 'Unknown user');
      }
    } else {
      this.notificationService.notify(NotificationType.ERROR, 'Error. Please enter your email and password.');
    }
  }


  // private sendErrorNotification(notificationType: NotificationType, message: string) {
  //   if (message) {
  //     this.notificationService.notify(notificationType, message);
  //   } else {
  //     this.notificationService.notify(notificationType, "An error occurred. Please try again");
  //   }
  // }

  register() {
    this.router.navigateByUrl("register");
  }
}
