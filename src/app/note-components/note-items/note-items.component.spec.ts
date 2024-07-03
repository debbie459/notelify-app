import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteItemsComponent } from './note-items.component';

describe('NoteItemsComponent', () => {
  let component: NoteItemsComponent;
  let fixture: ComponentFixture<NoteItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
