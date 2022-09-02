import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UsersService } from '../services/users.service';
import { ChangePassword } from '../interfaces/registro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {





  changePasswordDTO: ChangePassword = {
    email: '',
    password: '',
    newPassword: ''
  };


  constructor(public changePassword: UsersService, private router: Router) { }

  ngOnInit(): void { }

  changePassworCallService(){


     this.changePassword.putChangePassword(this.changePasswordDTO).subscribe({
      next: (_datos: any) => {

        Swal.fire(
          'Buen trabajo',
          'Cambiaste tu contraseña',
          'success'
        )

        this.router.navigate(['/login']);


      },
      error:(_error) => {

        Swal.fire({
          icon: 'error',
          title: 'Correo o contraseña no validos',
        });
      }
    })




  }

}
