import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestMaterialTableComponent } from './rest-material-table.component';

describe('RestMaterialTableComponent', () => {
  let component: RestMaterialTableComponent;
  let fixture: ComponentFixture<RestMaterialTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestMaterialTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestMaterialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
