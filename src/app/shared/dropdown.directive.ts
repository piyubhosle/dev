import { Directive, HostBinding, HostListener} from '@angular/core'

@Directive({
    selector: '[dd]'
})

export class DropDownDirective {
    @HostBinding('class.open') get opened() {
        return this.isOpen;
    }
    @HostListener('click') open() {
        this.isOpen = true;
    }
    @HostListener('mouseleave') close() {
        this.isOpen = false;
    }
    private isOpen = false;
}