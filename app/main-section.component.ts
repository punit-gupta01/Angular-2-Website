import {Component} from '@angular/core';

@Component({
	selector: 'main-app',
	templateUrl: 'app/html/main-section.component.html',
	styleUrls: ['app/css/main-section.component.css']

})
export class MainSectionComponent{
	totalCartValue : number = 0;

	AddToCart(value){
		this.totalCartValue+=value;
	}
}