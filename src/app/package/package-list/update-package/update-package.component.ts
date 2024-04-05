import { Component, Input, inject } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PackageService } from '../../package.service';

@Component({
  selector: 'app-update-package',
  templateUrl: './update-package.component.html',
  styleUrl: './update-package.component.css'
})
export class UpdatePackageComponent {
  route = inject(Router)
  packageService = inject(PackageService)
  visible: boolean = true;
  packageForm: FormGroup;
  status: string[] = ['activated', 'deactivated'];
  packageItem: any;
  updateClicked: boolean = true;
  @Input() package: any;

  ngOnInit(){
    // this.statusValue = ['activated', 'deactivated']
    this.packageForm = new FormGroup({
      'packageName': new FormControl(null, [Validators.required, Validators.pattern('^([A-Za-z]{2,25}\s*)+')]),
      'duration': new FormControl(null, [Validators.required, Validators.pattern('[A-Za-z0-9._]{2,30}')]),
      'category': new FormControl(null, [Validators.required]),
      'price': new FormControl(null, [Validators.required]),
      'status': new FormControl(null, [Validators.required])
    });
    
    this.packageForm.patchValue({
      packageName: this.package.package_name,
      duration: this.package.duration,
      category: this.package.category,
      price: this.package.price,
    })

}

  onSubmit(form){
    const packageName = form.value.packageName;
    const duration = form.value.duration;
    const category = form.value.category;
    const price = form.value.price;
    const status = form.value.status;
    this.packageService.updatePackages(this.package.package_id, packageName, duration, category, price, status).subscribe()
    this.visible = false;
  }

  onClose(){
    this.visible = false
  }

  
}