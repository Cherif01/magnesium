import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Magnus-Gestion';

  canShowMenu = true
  constructor (public location: Location, private router: Router) {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // `event.url` contient l'URL actuelle
        this.canShowMenu = event.url !== '/home/login'
        // Vous pouvez effectuer des vérifications supplémentaires ici
      })
  }
}

export function convertObjectInFormData (tab: any) {
  const formData = new FormData()

  for (const key in tab) {
    if (tab.hasOwnProperty(key)) {
      const value = tab[key]

      if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          formData.append(key, value[i])
        }
      } else if (typeof value === 'object' && value !== null) {
        const nestedFormData = convertObjectInFormData(value)
        nestedFormData.forEach((nestedValue, nestedKey) => {
          formData.append(key + '.' + nestedKey, nestedValue)
        })
      } else {
        formData.append(key, value)
      }
    }
  }

  return formData
}



export function imprimerDiv(divToPrint: any): void {
  // let printContents = this.divToPrint.nativeElement.innerHTML;
  let printContents = divToPrint
  let styles = Array.from(document.querySelectorAll('link[rel="stylesheet"], style')).map((node) => node.outerHTML).join('');
  let iframe: any = document.createElement('iframe');
  iframe.style.display = 'none';
  document.body.appendChild(iframe);
  let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  iframeDoc.open();
  iframeDoc.write('<html><head><title>Impression</title>' + styles + '</head><body>' + printContents + '</body></html>');
  iframeDoc.close();
  iframe.onload = function () {
    iframe.contentWindow.print();
    document.body.removeChild(iframe);
  };
}

