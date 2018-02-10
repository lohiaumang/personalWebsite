import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  title: any = 'Title';
  subTitle: any = 'Subtitle';
  description: any = 'Description';
  url: any = 'Url';
  githubLink: any = 'Github Link';
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openWorksDialog(choice): void {
    this.title = 'Title';
    this.description = 'Description';
    this.url = 'Url';
    this.githubLink = 'Github Link';
    if(choice === "PGo") {
      this.title = 'Pokemon Go Location Sharing App';
      this.description = 'Our team of 5, built an android app to share the locations of discovered pokemon with other users during a 24-hour Amazon hackathon. Our app displayed all the pokemon that were reported around the area of the user within a certain time frame. The app created a sticky notification that could be used to report the discovered pokemon without leaving the pokemon go app.';
    } else if(choice === 'IFRW') {
      this.title = 'Inhabitr Furniture Rental Website';
      this.description = 'Designed and built a separate website for furniture rental for Inhabitr, a home rental company. The furniture rental website was put into production and is currently operational. It can be seen by clicking on the link below.';
      this.url = 'http://www.inhabitr.com';
    } else if(choice === 'ESay') {
      this.title = 'Eversay';
      this.description = 'Currently working on this project to build an app that allows users to send time capsules to their friends. This app will also allow users to send location locked messages that will open when the receiving user is at a specific location.';
      this.githubLink = 'https://github.com/lohiaumang/eversay;https://github.com/lohiaumang/everysay-backend';
    } else if(choice === 'ROut') {
      this.title = 'ReachOut';
      this.description = 'We created this app to allow users to find friends to share meals with. The app was built using Ionic with an express js backend and a firebase data store. The app allows users to create groups and invite them for meals at a specific location and time. The app was published on the Google Play Store.';
      this.githubLink = 'https://github.com/lohiaumang/reachOut_v2;https://github.com/lohiaumang/reachOut_v2_backend';
    } else {
      return;
    }
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '50%',
      data: { 
        title: this.title, 
        description: this.description,
        url: this.url,
        githubLink: this.githubLink
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
    });
  }

  openExperienceDialog(choice): void {
    this.title = 'Title';
    this.subTitle = 'subtitle';
    this.description = 'Description';
    this.url = 'Url';
    this.githubLink = 'Github Link';
    if(choice === "Inhabitr") {
      this.title = 'Inhabitr Inc.';
      this.subTitle = 'Web and Mobile App for Renting Homes and Furniture';
      this.description = `
        Built an Ionic mobile application to facilitate home and furniture rental within a few clicks.
        Designed and Built a web app that lets users rent furniture and other home related products.
        Redesigned the homepage of the website to better describe the value proposition of the company.
        Managed a small team of developers and devised processes to maximize efficiency.
      `;
      this.url = 'http://www.inhabitr.com';
    } else if(choice === 'Amazon') {
      this.title = 'Amazon';
      this.subTitle = 'Interactive and Scalable Feedback System for Xray on Android';
      this.description = `
        Designed a multiple-choice question feedback system for the xray feature on the kindle e-reader android app.
        Developed the front-end, designed a database schema and wrote services for handling the data collected.
        Implemented and tested the end to end solution using technologies such as Java, Spring, and Ruby on Rails.
        Leveraged AWS services like S3, SQS, and RDS, to simplify and speed up development.
      `;
    } else {
      return;
    }
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '50%',
      data: { 
        title: this.title,
        subTitle: this.subTitle,
        description: this.description,
        url: this.url,
        githubLink: this.githubLink
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
      // this.animal = result;
    });
  }

  openEducationDialog(choice): void {
    this.title = 'Title';
    this.description = 'Description';
    this.url = 'Url';
    this.githubLink = 'Github Link';
    if(choice === "DSA") {
      this.title = 'Data Structures and Algorithms';
      this.description = 'Implemented a solution to the Travelling Salesman Problem (a NP-hard problem) using a permutation generator and a branch and bound algorithm. Built a stock exchange simulator using hash maps and priority queues. Implemented a minimum spanning tree.';
    } else if(choice === 'CS') {
      this.title = 'Computer Security';
      this.description = 'Carried out CSRF, XSS, and SQL injection attacks on unsafe websites. Exploited buffer overflow and learned how to prevent these vulnerabilities. Learned about cryptography and broke simple ciphers.';
    } else if(choice === 'OS') {
      this.title = 'Operating Systems';
      this.description = 'Implemented a thread library with mutex locks, and condition variables. Created a multi-threaded network file server using sockets, hand-over-hand locking, inodes, directory entries, and disk blocks that implemented read, write, create, and delete functionality. Also dealt with resilience and security.';
    } else if(choice === 'UI') {
      this.title = 'User Interfaces';
      this.description = 'Created an asteroid destroying game in Javascript that ran on the browser. In the process of creating a web application to manage student interactions in on-campus housing using Javascript, and AngularJS.';
    } else {
      return;
    }
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '50%',
      data: { 
        title: this.title, 
        description: this.description,
        url: this.url,
        githubLink: this.githubLink
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
    });
  }

}
