import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-group-page',
  imports: [RouterLink, RouterOutlet],
  template: `
    <main>
      <div class="content">
        <a routerLink="/">&larr; Volver</a>
        <div class="group-content">
          <router-outlet />
        </div>
      </div>
    </main>
  `,
  styles: `
    :host {
      display: block;
      font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Helvetica, Arial, sans-serif;
      color: #002a50;
      background: linear-gradient(135deg, rgba(255, 165, 12, 0.08), rgba(57, 139, 213, 0.08));
    }

    main {
      width: 100%;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem 1rem;
      box-sizing: border-box;
      background: radial-gradient(circle at top left, rgba(249, 178, 70, 0.12), transparent 30%),
        radial-gradient(circle at bottom right, rgba(57, 139, 213, 0.12), transparent 28%);
    }

    .content {
      width: 100%;
      max-width: 1200px;
      min-height: 1000px;
      margin-bottom: 3rem;
      padding: 2rem 2.25rem;
      background: rgba(255, 255, 255, 0.82);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(57, 139, 213, 0.2);
      border-radius: 24px;
      box-shadow: 0 24px 50px rgba(12, 54, 88, 0.12);
    }

    .group-content { min-width: 0; overflow-wrap: anywhere; }
    a { display: inline-block; margin-bottom: 2rem; color: #002a50; }

    @media screen and (max-width: 650px) {
      .content {
        width: min(100%, 520px);
        padding: 1.5rem 1.25rem;
      }
    }
  `,
})
export class GroupPageComponent {}
