import { useWatch } from '../src/index'
import { useState } from 'react'
import { renderHook, act } from '@testing-library/react-hooks'

describe('test when args changes the function only triggers once', () => {

    it('test with one dependency', () => {
        function useTest() {
            const [count, setCount] = useState(1)
            const [status, setStatus] = useState('')
            useWatch(() => {
                setCount(count => (count + 1))
            }, [status])
            return { count, setStatus, status }
        }
        const { result } = renderHook(() => useTest())
        const { setStatus } = result.current
        act(() => {
            setStatus('loading')
        })
        expect(result.current.status).toBe('loading')
        expect(result.current.count).toBe(2)
    });

    it('test if no dependency', () => {

        function useTest() {
            const [count, setCount] = useState(1)
            const [status, setStatus] = useState('')
            useWatch(() => {
                setCount(count => (count + 1))
            }, [])
            return { count }
        }
        const { result } = renderHook(() => useTest())
        setTimeout(() => {
            expect(result.current.count).toBe(1)
        }, 0)
    });

    it('test with multiple dependencies', () => {
        function useTest() {
            const [count, setCount] = useState(1)
            const [status, setStatus] = useState('')
            const [flag, setFlag] = useState('')
            useWatch(() => {
                setCount(count => (count + 1))
            }, [status, flag])
            return { count, setStatus, setFlag }
        }
        const { result } = renderHook(() => useTest())
        const { setStatus, setFlag } = result.current
        act(() => {
            setStatus('loading')
        })
        act(() => setFlag('flag')
        )
        expect(result.current.count).toBe(3)
    });
})