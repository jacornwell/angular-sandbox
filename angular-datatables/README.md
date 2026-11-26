# AngularDatatables

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.3.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## DataTables 

https://datatables.net/

https://datatables.net/manual/

https://datatables.net/manual/core/quick-start/modules


### Example Component

```typescript
import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import DataTable from 'datatables.net-dt';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnDestroy {
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

```

```html
<div style="padding: 20px;">
  <table #myTable class="display" style="width: 100%">
    <thead>
      <tr>
        <th>Name</th>
        <th>Position</th>
        <th>Office</th>
        <th>Salary</th>
      </tr>
    </thead>
    <tbody>
      @for (user of users; track user.name) {
        <tr>
          <td>{{ user.name }}</td>
          <td>{{ user.position }}</td>
          <td>{{ user.office }}</td>
          <td>{{ user.salary }}</td>
        </tr>
      }
    </tbody>
  </table>
</div>

```