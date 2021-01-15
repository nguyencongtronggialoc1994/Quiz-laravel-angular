import {Component, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-category',
  templateUrl: './search-category.component.html',
  styleUrls: ['./search-category.component.css']
})
export class SearchCategoryComponent implements OnInit {
  @Output() data = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {

  }

  getKeyword(event: any){
    let input = event.target.value;
    this.data.emit(input);
  }

}
