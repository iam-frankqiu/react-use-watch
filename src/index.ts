import {useEffect, useRef} from 'react'

export function useWatch (callback: () => {}, args: []):void {
    
    const flag = useRef(false)
    useEffect(() => {
        if (!flag.current) {
            flag.current = true
            return
        }
        callback()
    }, args)
}