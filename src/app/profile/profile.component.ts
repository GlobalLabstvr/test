import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AvatarComponent } from './avatar/avatar.component';
import { FirebaseService } from '../shared/services/firebase.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  avatarLink: string = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";

  constructor( 
    public firebaseService: FirebaseService,
    private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog
    ) { } 
   

  ngOnInit() {
    this.createForm();
    
  }

  createForm(){
    this.profileForm= this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      dateOfBirth:['',Validators.required]
      
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(AvatarComponent, {
      height: '400px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.avatarLink = result.link;
      }
    });
  }

  resetFields(){
    this.avatarLink = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";
    this.profileForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      dateofbirth: new FormControl('', Validators.required),
    });
  }

  onSubmit(value){
    this.firebaseService.createUser(value, this.avatarLink)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/payment']);
      }
    )
  }
  


}
