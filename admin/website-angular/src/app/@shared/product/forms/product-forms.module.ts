import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormWizardModule } from 'angular2-wizard';
import { ThemeModule } from '../../../@theme/theme.module';
import { BasicInfoFormComponent } from './basic-info';
import { ProductsTableComponent } from './products-table';
import { CategoriesTableComponent } from '../categories/categories-table/categories-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { FileUploadModule } from 'ng2-file-upload';
import { ProductCategoriesModule } from '../../render-component/product-categories/product-categories.module';
import { CommonModule } from '@angular/common';
import { NbSpinnerModule } from '@nebular/theme';
import { ConfirmationModalModule } from '../../confirmation-modal/confirmation-modal.module';
import { RenderComponentsModule } from 'app/@shared/render-component/render-components.module';

@NgModule({
	imports: [
		ThemeModule,
		CommonModule,
		FormWizardModule,
		TranslateModule.forChild(),
		MultiselectDropdownModule,
		Ng2SmartTableModule,
		FileUploadModule,
		ProductCategoriesModule,
		NbSpinnerModule,
		ConfirmationModalModule,
		RenderComponentsModule
	],
	exports: [
		BasicInfoFormComponent,
		ProductsTableComponent,
		CategoriesTableComponent
	],
	declarations: [
		BasicInfoFormComponent,
		ProductsTableComponent,
		CategoriesTableComponent
	]
})
export class ProductFormsModule {}
