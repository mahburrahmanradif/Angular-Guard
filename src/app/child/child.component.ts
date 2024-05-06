import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  canExit(): boolean {
    // Your logic for canExit route goes here
    // For example:
    // Check if there are any unsaved changes
    if (this.hasUnsavedChanges()) {
      // If there are unsaved changes, prompt the user to confirm leaving
      return confirm('Are you sure you want to leave this page? Any unsaved changes will be lost.');
    } else {
      // If there are no unsaved changes, allow navigation
      return true;
    }
  }

  private hasUnsavedChanges(): boolean {
    // Your logic to check for unsaved changes goes here
    // For example, you might check if certain form fields have been modified
    // In this example, we'll just return a boolean value indicating unsaved changes
    return false; // Change this logic based on your application's requirements
  }
    

}
