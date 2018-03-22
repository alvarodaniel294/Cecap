import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaActivosComponent } from './programa-activos.component';

describe('ProgramaActivosComponent', () => {
  let component: ProgramaActivosComponent;
  let fixture: ComponentFixture<ProgramaActivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramaActivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramaActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
