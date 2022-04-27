import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/Profile';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {

  form: FormGroup;
  profile: Profile;
  imageData: string;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl[0],
      image: new FormControl
    })
    
  }

  onSubmit() {
    this.form.reset();
    this.imageData = null;
  }

  onFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement | files[0]);
    const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    this.form.patchValue({ image: file })
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
