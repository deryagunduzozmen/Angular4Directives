import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
 // styleUrls: ['./server.component.css'],
  styles:[`.online{color:white}`]
})
export class ServerComponent implements OnInit {
serverCreated=false;
serverName='';
serverStatus='offline';
servers=["Test1","Test2"]
onCreateServer()
{
  this.servers.push(this.serverName);
  this.serverCreated=true;
}
  constructor() {
    this.serverStatus=Math.random()>0.5?'online':'offline';
   }
getColor()
{
return this.serverStatus=='online'?'green':'red';
}
  ngOnInit() {
  }

}
