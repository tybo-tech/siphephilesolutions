import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Email, EmailService } from 'src/services/email.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  name: string;
  email: string;
  cell: string;
  message: string;
  sent: string;
;
  phone;
  address;
  constructor(
    private emailService: EmailService,
    private router: Router,
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
  }
  sendEmail() {
    const emailToSend: Email = {
      From: this.email,
      Email: 'info@siphephilesolutions.co.za, mthobisi@siphephilesolutions.co.za,mlungisi@siphephilesolutions.co.za',
      Subject: this.name + ' Enquiry',
      Message: `${this.message}  | ${this.email} | ${this.phone}`,
      UserFullName: this.name
    };
    this.emailService.sendGeneralTextEmail(emailToSend)
      .subscribe(response => {
        if (response > 0) {
          this.sent = 'Thank you for contacting us we will reply as soon as possible';
          this.message = undefined;
          this.phone = undefined;
          this.email = undefined;
          this.name = undefined;
          //Thank you for contacting us we will reply as soon as possible
        }
      });
  }
}
