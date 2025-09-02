import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-floating-hearts',
  standalone: true,
  imports: [],
  templateUrl: './floating-hearts.component.html',
  styleUrl: './floating-hearts.component.scss'
})
export class FloatingHeartsComponent {
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    setInterval(() => {
      this.createHeart();
    }, 800);
  }

  createHeart() {
    const container = document.querySelector('.hearts-container');
    if (!container) return;

    const heart = this.renderer.createElement('div');
    this.renderer.addClass(heart, 'heart');

    // Random position + animation duration
    (heart as HTMLElement).style.left = Math.random() * window.innerWidth + 'px';
    (heart as HTMLElement).style.animationDuration = (3 + Math.random() * 5) + 's';

    this.renderer.appendChild(container, heart);

    // Remove sau khi animation xong
    setTimeout(() => {
      this.renderer.removeChild(container, heart);
    }, 8000);
  }
}
