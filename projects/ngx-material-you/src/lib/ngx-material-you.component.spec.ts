import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialYouComponent } from './ngx-material-you.component';

describe('NgxMaterialYouComponent', () => {
  let component: NgxMaterialYouComponent;
  let fixture: ComponentFixture<NgxMaterialYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMaterialYouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMaterialYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
