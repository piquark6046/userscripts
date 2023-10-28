export const createDebug = (namespace: string) => new Proxy(console.debug, {
	apply(target, thisArg, argArray) {
		Reflect.apply(target, thisArg, [`${namespace} (${location.href})`, ...argArray as unknown[]]);
	},
});

const debug = createDebug('[asdefuser:__utils__]');

export const isSubFrame = () => {
	try {
		return window.self !== window.top;
	} catch (_error) {
		return true;
	}
};

export const getCaller = () => {
	try {
		throw new Error('feedback');
	} catch (error: unknown) {
		if (!(error instanceof Error) || !error.stack) {
			return {} as const;
		}

		let self = '';

		for (const line of error.stack.split('\n').slice(1)) {
			const protocolEndAt = line.indexOf('//');

			if (protocolEndAt < 0) {
				continue;
			}

			const endAt = line.indexOf(':', protocolEndAt);

			if (endAt < 0) {
				continue;
			}

			const source = line.slice(protocolEndAt + 2, endAt);

			if (!self) {
				self = source;

				continue;
			}

			if (source === self) {
				continue;
			}

			return {
				source,
				line,
				stack: error.stack,
			} as const;
		}

		return {
			stack: error.stack,
		} as const;
	}
};

const knownDomainNames = new Set<string>();

export const isAsSource = (name: string, caller: ReturnType<typeof getCaller>) => {
	if (caller.source?.includes(location.host)) {
		return false;
	}

	if (caller.source?.includes('script.min.js') ?? caller.source?.includes('loader.min.js')) {
		debug(`isAsSource name=${name} caller=${caller.source}`);

		knownDomainNames.add(caller.source.split('/')[0]);

		return true;
	}

	return false;
};

type ThisWindow = Window & typeof globalThis;
type PermitableAsRoot = Record<PropertyKey, unknown> | ThisWindow | Document | Element | Node | ObjectConstructor;

export const swapMethod = <Root extends PermitableAsRoot, Key extends keyof Root>(
	root: Root,
	name: Key,
	feedback: (original: Root[Key], root: Root, name: string, caller: ReturnType<typeof getCaller>) => unknown,
) => {
	let target = root[name];

	Object.defineProperty(root, name, {
		get() {
			if (typeof feedback !== 'function') {
				return target;
			}

			const swapWith = feedback(target, root, name.toString(), getCaller());

			if (swapWith === false) {
				return target;
			}

			debug(`swapMethod name=${name.toString()}`);

			return swapWith;
		},
		set(v: Root[Key]) {
			if (typeof feedback === 'function' && feedback(target, root, name.toString(), getCaller())) {
				target = v;
			}
		},
	});

	debug(`swapMethod name=${name.toString()}`);
};

export const disableMethod = <Root extends PermitableAsRoot>(
	root: Root,
	name: keyof Root,
	feedback: (name: string, caller: ReturnType<typeof getCaller>) => boolean = isAsSource,
) => {
	swapMethod(root, name, (_original, _root, name, caller) => {
		let shouldDisable = true;

		if (typeof feedback === 'function') {
			shouldDisable = feedback(name, caller);
		}

		return shouldDisable;
	});
};

export const disableMethodGlobally = <Root extends PermitableAsRoot>(
	root: Root,
	name: keyof Root,
) => {
	swapMethod(root, name, () => true);
};

export const documentReady = async (document: Document) => {
	if (document.readyState !== 'loading') {
		return true;
	}

	return new Promise(resolve => {
		document.addEventListener('readystatechange', () => {
			resolve(true);
		});
	});
};
