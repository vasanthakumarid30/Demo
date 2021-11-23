import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotDialogComponent } from './chatbot-dialog.component';

describe('ChatbotDialogComponent', () => {
  let component: ChatbotDialogComponent;
  let fixture: ComponentFixture<ChatbotDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatbotDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
