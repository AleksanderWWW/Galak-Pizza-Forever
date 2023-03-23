import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  private fileOver: boolean = true;

  constructor() {
  }
  ngOnInit(): void {
  }

  @HostListener('dragover', ['$event'])
  onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    console.log('Drag Over');
  }
  @HostListener('dragleave', ['$event'])
  onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    console.log('Drag Leave');
  }

  @HostListener('dragdrop', ['$event'])
  onDragDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    const files = evt.dataTransfer.files;
    if(files.length > 0) {
      console.log(`You dropped ${files.length} files here`);
    }
    console.log('Drag Leave');
  }

  fileBrowseHandler(files: any): void {

  }

}
