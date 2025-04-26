import { FooterComponent } from "../../components/footer/footer.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import {
  Component,
  QueryList,
  ViewChildren,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { RouterModule } from "@angular/router";
@Component({
  selector: 'app-home',
  imports: [FooterComponent, NavBarComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fadeIn', [
      state('out', style({ opacity: 0, transform: 'translateY(30px)' })),
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('out => in', animate('1000ms ease-out'))
    ])
  ]
})
export class HomeComponent implements AfterViewInit {
  @ViewChildren('targetElement') targetElements!: QueryList<ElementRef>;
  visibleElements: boolean[] = [];

  ngAfterViewInit() {
    this.visibleElements = new Array(this.targetElements.length).fill(false);

    this.targetElements.forEach((element, index) => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.visibleElements[index] = true;
            observer.unobserve(entry.target);
          }
        });
      });

      observer.observe(element.nativeElement);
    });
  }
}
