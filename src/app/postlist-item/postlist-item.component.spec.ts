import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostlistItemComponent } from './postlist-item.component';

describe('PostlistItemComponent', () => {
  let component: PostlistItemComponent;
  let fixture: ComponentFixture<PostlistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostlistItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostlistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
