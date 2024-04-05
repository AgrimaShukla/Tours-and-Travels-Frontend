import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PackageService } from '../package.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrl: './add-package.component.css'
})
export class AddPackageComponent {
  packageService = inject(PackageService);
  router = inject(Router);

  packageForm: FormGroup;
  durations: string[];
  categories: string[];
  status: string[];
  visible: boolean = true
  
  ngOnInit(){
    this.durations = ['4-days-3-nights','3-days-2-nights','2-days-1-nights'];
    this.categories = ['luxury', 'budget', 'mid-range'],
    this.status = ['activated', 'deactivated']


    this.packageForm = new FormGroup({
      'packageName': new FormControl(null, [Validators.required, Validators.pattern('^([A-Za-z]{2,25}\s*)+')]),
      'duration': new FormControl(null, [Validators.required, Validators.pattern('[A-Za-z0-9._]{2,30}')]),
      'category': new FormControl(null, [Validators.required]),
      'price': new FormControl(null, [Validators.required]),
      'status': new FormControl(null, [Validators.required]),
     
    })
  }

  onSubmit(form){
    const packageName = form.value.packageName;
    const duration = form.value.duration;
    const category = form.value.category;
    const price = form.value.price;
    const status = form.value.status;
    this.packageService.postPackages(packageName, duration, category, price, status).subscribe();
    this.visible = false;
  }

  onClose(){
    this.router.navigate(['packages'])
  }
}
