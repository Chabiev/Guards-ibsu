import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit{
  workerForm!: FormGroup;

  showWorker!: boolean;
  
  constructor(private fb: FormBuilder, private router: Router){}
  
  ngOnInit(): void {
    this.showWorker = true;
    this.createForm();
  }

  createForm(){
    this.workerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  goToAdmin(){
    this.router.navigate(['/admin']);
  }

  goToChild(){
    this.router.navigate(['worker/details']);
    this.showWorker=false;
  }

  canExit(){
    if(!this.workerForm.valid){
      return window.confirm('You have unsaved changes. Do you really want to discard this change?');
      
    }else{
      return true;
    }
  }

}
