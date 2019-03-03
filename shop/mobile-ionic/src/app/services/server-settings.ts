import { Injectable } from '@angular/core';
import { InviteRouter } from '@modules/client.common.angular2/routers/invite-router.service';
import { Store } from './store.service';
import { UserAuthRouter } from '@modules/client.common.angular2/routers/user-auth-router.service';
import RegistrationSystem from '@modules/server.common/enums/RegistrationSystem';
import { environment } from 'environment';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ServerSettings {
	constructor(
		private readonly inviteRouter: InviteRouter,
		private readonly userAuthRouter: UserAuthRouter,
		private readonly store: Store,
		private readonly http: HttpClient
	) {}

	async load() {
		await this.checkServerConnection();
		return new Promise(async (resolve, reject) => {
			if (
				!this.store.maintenanceMode &&
				Number(this.store.serverConnection) !== 0
			) {
				const inviteSystem = await this.inviteRouter.getInvitesSettings();
				const registrationSystem = await this.userAuthRouter.getRegistrationsSettings();

				this.store.inviteSystem = inviteSystem.isEnabled;
				this.store.registrationSystem = registrationSystem.registrationRequiredOnStart
					? RegistrationSystem.Enabled
					: RegistrationSystem.Disabled;
			}

			resolve(true);
		});
	}

	private async checkServerConnection() {
		try {
			await this.http
				.get(environment.SERVICES_ENDPOINT)
				.pipe(first())
				.toPromise();
		} catch (error) {
			this.store.serverConnection = error.status;
		}
	}
}
