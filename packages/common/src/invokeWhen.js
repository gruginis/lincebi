import throttle from 'lodash/throttle';

export default (condFunc, invokeFunc, { wait = 50, timeout = 10000 } = {}) => {
	const start = performance.now();
	const tryInvoke = throttle(() => {
		if (performance.now() - start <= timeout) {
			const condResult = condFunc();
			if (condResult) invokeFunc(condResult);
			else tryInvoke();
		} else {
			console.warn('[invokeWhen] Timeout:', condFunc, invokeFunc);
		}
	}, wait);

	tryInvoke();
};
