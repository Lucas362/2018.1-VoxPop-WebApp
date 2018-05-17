import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from '../requests.service';
import { TokenService } from '../token.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-see-politician',
  templateUrl: './see-politician-detail.component.html',
  styleUrls: ['./see-politician-detail.component.css']
})
export class SeePoliticianDetailedComponent implements OnInit {
  tokenValue = '';
  sub: any;
  id: number = 0;
  parlimentarian: any = {
    name: '',
    gender: '',
    partido: '',
    federal_unit: '',
    photo: ''
  };
  gender: string = '';

  constructor(
    private route: ActivatedRoute,
    private requester:RequestsService,
    private token: TokenService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.tokenValue = this.cookieService.get('token');
    this.token.checkToken(this.tokenValue);

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
      console.log(this.id);
    });

   this.requester.getParlimentarianSpecific(this.id).subscribe( response =>{
    this.parlimentarian = response['body'];
    console.log(this.parlimentarian);
    if(this.parlimentarian['gender'] == 'M'){
      this.gender = "Masculino";  
    }
    else if (this.parlimentarian['gender'] == 'F'){
      this.gender = "Feminino";
    }
    else{
      this.gender = "N/A";
    }
   }, error=>{
    console.log(error.status);
    this.parlimentarian = {
      name : "DEPUTADO NÃO ENCONTRADO",
      gender : "N/A",
      federal_unit: "N/A",
      photo: "N/A"
    }
   });
  }

  followParliamentarian(){
    var status;
    this.requester.postFollow(this.parlimentarian.id).subscribe(response => {
      status = response.status;
      console.log(status);
    });
  }
}

