import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class CommonUiService {
    constructor() { }
}
CommonUiService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CommonUiService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CommonUiService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CommonUiService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CommonUiService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class CommonUiComponent {
    constructor() { }
    ngOnInit() {
    }
}
CommonUiComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CommonUiComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CommonUiComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: CommonUiComponent, selector: "lib-common-ui", ngImport: i0, template: `
    <p>
      common-ui works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CommonUiComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-common-ui', template: `
    <p>
      common-ui works!
    </p>
  ` }]
        }], ctorParameters: function () { return []; } });

class CommonUiModule {
}
CommonUiModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CommonUiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CommonUiModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: CommonUiModule, declarations: [CommonUiComponent], exports: [CommonUiComponent] });
CommonUiModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CommonUiModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CommonUiModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CommonUiComponent
                    ],
                    imports: [],
                    exports: [
                        CommonUiComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of common-ui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CommonUiComponent, CommonUiModule, CommonUiService };
//# sourceMappingURL=common-ui.mjs.map
