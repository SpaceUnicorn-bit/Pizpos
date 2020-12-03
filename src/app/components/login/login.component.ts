import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild(ToastContainerDirective, {static: true}) toastContainer: ToastContainerDirective;
  public employee: Employee;
  public token;
  public identity;
  public popUpFail = false;
  public auth = {
    user: 'admin01',
    password: '123'
  };

  constructor(private router: Router, private toastr: ToastrService,) {
    this.employee = new Employee('', '');
  }

  Onsubmit() {
    if (this.employee.user === '' || this.employee.password === '') {
      this.showEmptyAdmin();
    }else {
      if (this.employee.user === this.auth.user && this.employee.password === this.auth.password) {
        this.identity = this.employee;
        localStorage.setItem('identity', JSON.stringify(this.identity));
        this.router.navigate(['dashboard']);
      }else {
        this.showErrorAdmin();
      }
    }

  }

  showEmptyAdmin() {
    this.toastr.overlayContainer = this.toastContainer;
    this.toastr.error('Todos los campos deben de estar llenos',
    'Error', {
      timeOut: 1000,
      progressBar: true
    });
  }

  showErrorAdmin() {
    this.toastr.overlayContainer = this.toastContainer;
    this.toastr.error('usuario o contraseña incorrecto',
    'Error', {
      timeOut: 1000,
      progressBar: true
    });
  }

  ngOnInit(): void {
  }

}
