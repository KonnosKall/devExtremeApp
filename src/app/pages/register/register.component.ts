import { Component, OnInit, ViewChild } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { Customer, Service } from './register.service';
import { DxFormComponent } from 'devextreme-angular';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ Service ]
})



export class RegisterComponent implements OnInit {
  @ViewChild(DxFormComponent, { static: false }) form:DxFormComponent
  password = "";
  passwordOptions: any = {
      mode: "password",
      value: this.password
  };
  customer: Customer;
  countries: string[];
  cities: string[];
  maxDate: Date = new Date();
  cityPattern = "^[^0-9]+$";
  namePattern: any = /^[^0-9]+$/;
  phonePattern: any = /^\+\s*1\s*\(\s*[02-9]\d{2}\)\s*\d{3}\s*-\s*\d{4}$/;
  phoneRules: any = {
      X: /[02-9]/
  }
  buttonOptions: any = {
      text: "Register",
      type: "success",
      useSubmitBehavior: true
  }
  passwordComparison = () => {
      return this.form.instance.option("formData").Password;
  };
  checkComparison() {
      return true;
  }
  constructor(service: Service) {
      this.maxDate = new Date(this.maxDate.setFullYear(this.maxDate.getFullYear() - 21));
      this.countries = service.getCountries();
      this.cities = service.getCities();
      this.customer = service.getCustomer();
  }
  // asyncValidation(params) {
  //     return sendRequest(params.value);
  // }
  onFormSubmit = function(e) {
      notify({
          message: "You have submitted the form",
          position: {
              my: "center top",
              at: "center top"
          }
      }, "success", 3000);
      
      e.preventDefault();
  }

  ngOnInit(): void {
  }

}
