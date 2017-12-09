import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  label = 'empty';

  constructor(private _client: HttpClient)
  {

  }

  GetLabel()
  {
   this._client.get('http://angulartomasza.hostingasp.pl/api/values', {responseType: 'text'})
   .subscribe(
   data => {   
    this.label = data.toString();
   }


   )
  }
}
