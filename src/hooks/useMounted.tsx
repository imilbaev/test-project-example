import { useEffect, useRef, useCallback } from "react";

export const useMounted = (): (() => boolean) => {
	const mountedRef = useRef(true);

	useEffect(
		() => () => {
			mountedRef.current = false;
		},
		[]
	);

	return useCallback(() => mountedRef.current, []);
};
