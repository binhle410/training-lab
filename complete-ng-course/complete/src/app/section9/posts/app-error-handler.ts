import {ErrorHandler, Injectable} from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    alert('An error has occurred! This alert was displayed from app-error-handler.ts (Global Error Handler)');
    console.log(error);
  }
}
