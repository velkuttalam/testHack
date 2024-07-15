import { Component } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });
 

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted successfully!');
    } else {
      console.log('Form is invalid!');
    }
  }
}
  
  
