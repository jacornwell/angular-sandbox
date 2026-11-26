import { Component, inject, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import DataTable from 'datatables.net-dt';


@Component({
  imports: [],
  selector: 'app-basic-example',
  styleUrl: './basic-example.css',
  templateUrl: './basic-example.html',
})
export class BasicExample {
  @ViewChild('myTable', { static: false }) tableElement!: ElementRef;
  private dtInstance: any;

  // Sample data (can also come from an API/Service)
  users = [
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', salary: '$320,800' },
    { name: 'Garrett Winters', position: 'Accountant', office: 'Tokyo', salary: '$170,750' },
    { name: 'Ashton Cox', position: 'Junior Technical Author', office: 'San Francisco', salary: '$86,000' }
  ];

  ngAfterViewInit(): void {
    // Initialize DataTable on the native HTML table element
    this.dtInstance = new DataTable(this.tableElement.nativeElement, {
      paging: true,
      searching: true,
      ordering: true,
      pageLength: 5
    });
  }

  ngOnDestroy(): void {
    // Clean up the DataTable instance when the component is destroyed
    if (this.dtInstance) {
      this.dtInstance.destroy();
    }
  }
}
