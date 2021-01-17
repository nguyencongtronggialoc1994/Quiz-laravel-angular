import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuizToCategoryComponent } from './add-quiz-to-category.component';

describe('AddQuizToCategoryComponent', () => {
  let component: AddQuizToCategoryComponent;
  let fixture: ComponentFixture<AddQuizToCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQuizToCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuizToCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
