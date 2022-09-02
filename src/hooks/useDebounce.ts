import { useCallback, useEffect, useRef, useState } from "react";

/** 防抖函数 */
export function useDebounce(fn: any, delay: number, dep = []) {
    const { current } = useRef({ fn, timer: 0});
    useEffect(function () {
        current.fn = fn;
    }, [fn]);

    return useCallback(function f(...args: any[]) {
        if (current.timer) {
            clearTimeout(current.timer);
        }
        current.timer = window.setTimeout(() => {
            current.fn(...args);
        }, delay);
    }, dep)
}

