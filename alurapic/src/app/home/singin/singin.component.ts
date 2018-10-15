import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from '../../core/platform-detector/platform-detector.service';

@Component({
    templateUrl: './singin.component.html',
})
export class SingInComponet implements OnInit{

    loginForm: FormGroup;
    @ViewChild('userNameInput') usernameInput: ElementRef;

    constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private platformDetectorService: PlatformDetectorService){}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        const username: string = this.loginForm.get('username').value;
        const password: string = this.loginForm.get('password').value;
        
        this.authService.authenticate(username, password).subscribe(
            () => this.router.navigate(['user', username]), 
            err => {
                console.log(err);
                this.loginForm.reset();
                this.platformDetectorService.isPlatformBrowser() && this.usernameInput.nativeElement.focus();
                alert('Usuario ou senha incorretos!');
            }
        );
    }
}

