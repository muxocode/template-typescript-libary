import {StringHelper} from "./StringHelper"

let oStringHelper = new StringHelper();

test('basic int', () => {
  expect(oStringHelper.ToNumber("3")).toBe(3);
});

test('basic float', () => {
    expect(oStringHelper.ToNumber("3.5")).toBe(3.5);
});

test('basic default', () => {
    expect(oStringHelper.ToNumber("Miguel")).toBe(0);
});

test('custom default', () => {
    expect(oStringHelper.ToNumber("Miguel", 5)).toBe(5);
});