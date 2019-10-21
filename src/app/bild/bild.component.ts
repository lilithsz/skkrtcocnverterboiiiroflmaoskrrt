import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bild',
  templateUrl: './bild.component.html',
  styleUrls: ['./bild.component.scss']
})
export class BildComponent implements OnInit {
  files = [];
  selectedFile = null;
    constructor() { }

    onFileSelect(event) {
      this.selectedFile = event.target.files[0];
    }

    onUpload(event) {
      event.preventDefault();
      fetch(event.target.action, {
        method: 'POST',
        body: new FormData(event.target)
      }).then(res => console.log(res)).catch(res => console.log(res));
      this.files = [ ...this.files, this.selectedFile.split('.')[0] ];
      window.location.reload(true);
    }
  ngOnInit() {
      fetch('http://localhost:80/images.php').then(res => res.json()).then(res => this.files = [ ...(new Set(res.map(file => file.split('.')[0]))) ]);
  }
}
