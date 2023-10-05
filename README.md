## Features and Functionality

PocToastr is a proof-of-concept Angular application that showcases the use of the ngx-toastr library to display customizable notifications. It demonstrates various features and functionalities, including:

### Notification Types

1. **Success Notifications:** Display success messages with indefinite duration and a close button. They appear at the top-right corner of the screen.

2. **Warning Notifications:** Show warning messages with a 5-second duration and no option to close. They appear at the top-left corner of the screen.

3. **Info Notifications:** Present informative messages with indefinite duration and a close button. They appear at the bottom-right corner of the screen.

4. **Error Notifications:** Display error messages with a 10-second duration and a close button. They appear at the bottom-left corner of the screen.

### Toastr Integration

- Demonstrates integration with the [ngx-toastr](https://www.npmjs.com/package/ngx-toastr) library.
- Configures toastr notifications with various options, including duration, position, and close button availability.

### Bootstrap Integration

- Integrates the Bootstrap framework for styling and UI components.

### Angular CLI Commands

- Utilizes Angular CLI for development, including commands like `ng serve`, `ng build`, `ng test`, and `ng e2e`.

### Easy Customization

- Allows easy customization of notification styles and behavior through Angular components and configuration.

### Testing

- Includes unit tests via [Karma](https://karma-runner.github.io/) and end-to-end tests.

## Getting Started

Follow these steps to get started with PocToastr:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Run the development server: `ng serve`
4. Open your browser and navigate to `http://localhost:4200/`

Feel free to explore and interact with the different notification types and their behaviors.

## Building the Project

To build the project for production use, run `ng build`. The build artifacts will be located in the `dist/` directory.

## Running Tests

You can run unit tests using `ng test` and end-to-end tests using `ng e2e`. Be sure to follow the respective instructions to set up your testing environment.

For more information on Angular CLI commands and options, refer to the [Angular CLI Documentation](https://angular.io/cli).
