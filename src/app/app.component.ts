import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'subscription-demo';
  client_val:any='';
  client_type:any='';
  filteredData:any=[];
  displayStyle = "none";
  showTable: any = false;
  finalPolicyData:any;

  policydata = [

    {"id":"1","client_id":"1101","client_name":"Mukesh","policy_number":"11234","policy_name":"JeevanAnand"},
    {"id":"1","client_id":"1101","client_name":"Mukesh","policy_number":"11235","policy_name":"JeevanSaral"},
    {"id":"1","client_id":"1101","client_name":"Mukesh","policy_number":"11236","policy_name":"Max Salary Protection"},
    {"id":"1","client_id":"1101","client_name":"Mukesh","policy_number":"11237","policy_name":"Jeevan Amar"},

  ]

  data = [
    {"id":"1", "client_name":"Mukesh", "client_id":"1101","PolicyCompany":"LIC"},
    {"id":"2","client_name":"Samar", "client_id":"1102","PolicyCompany":"Max Life"},
    {"id":"3","client_name":"Ravi Raj", "client_id":"1103","PolicyCompany":"Baja"}
  ];

  search(){
    console.log("Data +++" + this.client_val, this.client_type);
    if(this.client_type == 'id'){
      this.filteredData = this.data.filter(dt=>dt.client_id == this.client_val);
    } 
    else {
      this.filteredData = this.data.filter(dt=>dt.client_name==this.client_val);
    } 
    console.log(this.filteredData);
    this.displayStyle = 'block';
  }

  closePopup() {
    this.displayStyle = "none";
    }

    selectClient(id:any){
      this.showTable = true;
      this.closePopup();
      this.finalPolicyData=this.policydata.filter(itm=>itm.client_id==id);
      console.log("id+++++",id,this.policydata);

    }



}
