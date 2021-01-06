import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuizzesComponent } from './create-quizzes.component';

describe('CreateQuizzesComponent', () => {
  let component: CreateQuizzesComponent;
  let fixture: ComponentFixture<CreateQuizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateQuizzesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
