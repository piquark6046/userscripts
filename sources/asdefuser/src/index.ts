import {useNetworkInterceptor} from './interceptors/network.js';
import {basera1n} from './loaders/basera1n.js';
import {shortwave} from './loaders/shortwave.js';
import {useDisableMethod, useIsSubframe} from './utils.js';

const bootstrap = () => {
	if (useIsSubframe()) {
		return;
	}

	useNetworkInterceptor();
	useDisableMethod(Element.prototype, 'remove');
	useDisableMethod(Element.prototype, 'removeChild');
	useDisableMethod(Element.prototype, 'append');
	useDisableMethod(Element.prototype, 'appendChild');
	useDisableMethod(Element.prototype, 'insertBefore');
	useDisableMethod(Element.prototype, 'attachShadow');

	void basera1n();
	void shortwave();
};

bootstrap();