import { Component, OnInit } from '@angular/core';
import { JournalService } from '../services/journal.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entryList: Array<Object>;

  constructor(private Diario: JournalService) { }

  ngOnInit() {
    this.Diario.getJournal()
    .subscribe(r => this.entryList = r);
  }

}
