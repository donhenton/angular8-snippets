import { SecurityService } from '../reactive-demos/support/securityService';
import { Group } from '../reactive-demos/support/security.interfaces';
import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';

export function validateGroup(securityService: SecurityService): AsyncValidatorFn {

    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {

        return Observable.timer(500).switchMap(() => {
            return securityService.getAllGroups().map((groups: Group[]) => {
                let vE: ValidationErrors = null;
                const filterTest = groups.filter((g: Group) => {
                    return g.groupName === control.value;

                })


                if (!filterTest || filterTest.length === 0) {
                    vE = { 'validateGroup': true };
                }


                return vE;
            })

        });

    };


}
