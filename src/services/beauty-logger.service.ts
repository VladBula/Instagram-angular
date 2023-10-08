import {Injectable} from '@angular/core';

type logType = 'error' | 'success' | 'info' | 'warning'


@Injectable({
  providedIn: 'root'
})
export class BeautyLoggerService {

  log(message: string, severity: logType) {
    console.log(`%c${message}`, this.getSeverity(severity))
  }

  getSeverity(type: logType) {
    switch (type) {
      case 'success':
        return 'background: green; color: white;'
      case 'info':
        return 'background: blue; color: white;'
      case 'error':
        return 'background: red; color: white;'
      case 'warning':
        return 'background: orange; color: black;'

      default:
        return ''

    }
  }
}

// console.log("%cExtra Large Yellow Text with Red Background", "background: red; color: yellow; font-size: x-large")
