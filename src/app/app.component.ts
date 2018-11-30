import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(){
    if (innerWidth < 700){
      document.getElementById("about").style.visibility = "hidden";
      document.getElementById("facts").style.visibility = "hidden";
      document.getElementById("reviews").style.visibility = "hidden";
      document.getElementById("satisfaction").style.visibility = "hidden";
    }
  }

  scrolltoabout(){
    const aboutbutton = document.getElementById("BusinessInfo");
  aboutbutton.scrollIntoView({ block: 'center',  behavior: 'smooth' });
  }
  scrolltofacts(){
    const factsbutton = document.getElementById("OurFeatures");
  factsbutton.scrollIntoView({ block: 'center',  behavior: 'smooth' });
  }
  scrolltoreviews(){
    const reviewsbutton = document.getElementById("CustomerFeedback");
  reviewsbutton.scrollIntoView({ block: 'center',  behavior: 'smooth' });
  }
  scrolltosatisfaction(){
    const satisfactionbutton = document.getElementById("Satisfaction");
  satisfactionbutton.scrollIntoView({ block: 'center',  behavior: 'smooth' });
  }

  title = 'CPNew-IgniteWebpage';
}
