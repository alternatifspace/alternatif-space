// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { InitialState } from 'svelte-clerk';

declare global {
	namespace App {
		interface Locals {
			auth(): import('@clerk/backend').Auth;
		}
		interface PageData {
			initialState?: InitialState;
		}
		interface Platform {
			env: Env;
			ctx: ExecutionContext;
			caches: CacheStorage;
			cf?: IncomingRequestCfProperties;
		}

		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
	}
}

export {};
