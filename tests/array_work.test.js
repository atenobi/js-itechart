//                                  *** Array work tests ***
// __________________________________________________________________________________________

const {
    firstArrEl,
    lastArrEl,
    mySkip,
    myTake,
    asChain,
} = require("../js_files/array_work_library");

const testArrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const testArrayStr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'g'];

// first element of array
test('function must return first elemeent of any array', () => {
    expect(firstArrEl(testArrayNum)).toBe(1);
    expect(firstArrEl(testArrayStr)).toBe('a');
});

// last element of array
test('function must return last element of any array', () => {
    expect(lastArrEl(testArrayNum)).toBe(9);
    expect(lastArrEl(testArrayStr)).toBe('g');
});

// skip first number of elements
test('function must skip some elements from arr, and return other elements', () => {
    expect(mySkip(testArrayNum, 1)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(mySkip(testArrayNum, 2)).toStrictEqual([2, 3, 4, 5, 6, 7, 8, 9]);
    expect(mySkip(testArrayNum, 3)).toStrictEqual([3, 4, 5, 6, 7, 8, 9]);
    expect(mySkip(testArrayStr, 1)).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'g']);
    expect(mySkip(testArrayStr, 2)).toStrictEqual(['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'g']);
    expect(mySkip(testArrayStr, 3)).toStrictEqual(['c', 'd', 'e', 'f', 'g', 'h', 'i', 'g']);
});

// take some first elements from array
test('function must return first elements of array as it`s needed', () => {
    expect(myTake(testArrayNum, 1)).toStrictEqual([1]);
    expect(myTake(testArrayNum, 2)).toStrictEqual([1, 2,]);
    expect(myTake(testArrayNum, 3)).toStrictEqual([1, 2, 3]);
    expect(myTake(testArrayStr, 1)).toStrictEqual(['a']);
    expect(myTake(testArrayStr, 2)).toStrictEqual(['a', 'b']);
    expect(myTake(testArrayStr, 3)).toStrictEqual(['a', 'b', 'c']);
});

// chaining
test('function must have ability to chain her child methods - skip, take, result(show result)', () => {
    expect(asChain(testArrayNum).result()).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(asChain(testArrayNum).skip(2).result()).toStrictEqual([2, 3, 4, 5, 6, 7, 8, 9]);
    expect(asChain(testArrayNum).skip(2).take(2).result()).toStrictEqual([2, 3]);
    expect(asChain(testArrayStr).result()).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'g']);
    expect(asChain(testArrayStr).skip(2).result()).toStrictEqual(['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'g']);
    expect(asChain(testArrayStr).skip(2).take(2).result()).toStrictEqual(['b', 'c']);
});