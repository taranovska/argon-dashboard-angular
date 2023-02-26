import { ProductCompareComponent } from "./../../components/product-compare/product-compare.component";
import { ProfileComponent } from "./../../components/profile/profile.component";
import { TimelineComponent } from "./../../components/timeline/timeline.component";
import { ModalWindowsComponent } from "./../../components/modal-windows/modal-windows.component";
import { AlertsComponent } from "./../../components/alerts/alerts.component";
import { OffcanvasComponent } from "./../../components/offcanvas/offcanvas.component";
import { WidgetsComponent } from "./../../components/widgets/widgets.component";
import { GridLayoutComponent } from "./../../components/grid-layout/grid-layout.component";
import { ExamplesComponent } from "./../../pages/examples/examples.component";
import { DropdownComponent } from "./../../components/dropdown/dropdown.component";
import { ContractComponent } from "./../../components/contract-tab/contract.component";
import { AnalyticsComponent } from "./../../components/analytics-tab/analytics.component";
import { GroupsComponent } from "./../../components/groups-tab/groups.component";
import { DepartmentsComponent } from "../../components/departments-tab/departments.component";
import { BusinessUnitComponent } from "./../../components/business-unit-tab/business-unit.component";
import { TeamComponent } from "./../../components/teams-tab/team.component";
import { CostCenterComponent } from "./../../components/cost-center-tab/cost-center";
import { DivisionComponent } from "../../components/departments-tab/division-tab/division.component";

import { EmployeesComponent } from "./../../components/employees-tab/employees.component";
import { OrganizationComponent } from "./../../components/organization-tab/organization.component";
import { SetupComponent } from "../../components/setup-tab/setup.component";
import { CompanyComponent } from "./../../pages/company/company.component";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ClipboardModule } from "ngx-clipboard";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ComponentsModule } from "../../components/components.module";
import { JobTitleComponent } from "src/app/components/job-titles-tab/job-title.component";
import { IconsCardComponent } from "src/app/components/icons/icons/icons.component";
import { CardLayoutComponent } from "src/app/components/card-layout/card-layout.component";
import { AccordionComponent } from "src/app/components/accordion/accordion.component";
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    CompanyComponent,
    ExamplesComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    SetupComponent,
    IconsComponent,
    EmployeesComponent,
    BusinessUnitComponent,
    DepartmentsComponent,
    DivisionComponent,
    DropdownComponent,
    JobTitleComponent,
    CostCenterComponent,
    GroupsComponent,
    TeamComponent,
    OrganizationComponent,
    AnalyticsComponent,
    ContractComponent,
    IconsCardComponent,
    GridLayoutComponent,
    CardLayoutComponent,
    AccordionComponent,
    OffcanvasComponent,
    AlertsComponent,
    ModalWindowsComponent,
    TimelineComponent,
    ProfileComponent,
    ProductCompareComponent,
    WidgetsComponent,
    AlertsComponent,
    ModalWindowsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ComponentsModule,
  ],
})
export class AdminLayoutModule {}
