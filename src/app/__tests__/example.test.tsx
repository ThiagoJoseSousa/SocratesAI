import {expect, jest, test} from '@jest/globals';
import { testing, fetchData } from '../chat/async';


test('HAH my name is',  ()=>{
    expect('SlimShady').toBe('SlimShady')
})

test('HAH my name is',  ()=>{
    expect('SlimShady').toBe('SlimShady')
})

test('HAH my name is',  ()=>{
    expect('SlimShady').toBe('SlimShady')
})

test('HAH my name is',  ()=>{
    expect('SlimShady').toBe('SlimShady')
})

test ('true', ()=>{
    expect(testing()).toBe(true)
})

test('object', ()=>{
    fetchData().then((res)=>{
        expect(res).toBe({})
    })
})