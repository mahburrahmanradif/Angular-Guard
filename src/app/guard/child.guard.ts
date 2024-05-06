import { CanActivateChildFn } from '@angular/router';

export const childGuard: CanActivateChildFn = (route, state) => {
  // Simulate user role check - You may get user role from your authentication service
  const userRole = sessionStorage.getItem("userRole");

  // Check if the user role meets certain criteria to access child routes
  if (userRole === 'admin' || userRole === 'manager') {
    // User role meets criteria, allow access to child routes
    console.log(`User with role '${userRole}' has access to child routes.`);
    return true;
  } else {
    // User role does not meet criteria, deny access to child routes
    // Print the user's role in the log message
    console.log(`User with role '${userRole}' does not have permission to access child routes.`);
    
    // Return false to block access to child routes
    return false;
  }
};
