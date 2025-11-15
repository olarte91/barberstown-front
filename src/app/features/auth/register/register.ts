import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Register implements OnInit{
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void{
    this.registerForm = this.fb.group({
      //TODO
    })
  }
}
