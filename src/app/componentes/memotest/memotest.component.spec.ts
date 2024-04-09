import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemotestComponent } from './memotest.component';
import { CommonModule } from '@angular/common';

describe('MemotestComponent', () => {
  let component: MemotestComponent;
  let fixture: ComponentFixture<MemotestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemotestComponent,CommonModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemotestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
