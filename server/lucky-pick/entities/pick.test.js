import Pick from './pick';

test('Create test numbers ok', () => {
    const pick = new Pick({numbers: [1,2,3,4,5]});

    expect(pick.numbers()).toStrictEqual([1,2,3,4,5]);
});

test('Create test extras ok', () => {
    const pick = new Pick({numbers: [1,2,3,4,5], extras: {extra: {number: 10, name: 'the extra'}}});

    expect(pick.extras()).toStrictEqual({extra: {number: 10, name: 'the extra'}});
});

test('Create test has extras ok', () => {
    const pick = new Pick({numbers: [1,2,3,4,5], extras: {extra: {number: 10, name: 'the extra'}}});

    expect(pick.hasExtras()).toBe(true);
});


test('Create test has extras number', () => {
    const pick = new Pick({numbers: [1,2,3,4,5], extras: {extra: {number: 10, name: 'the extra'}}});

    expect(pick.extras().extra.number).toBe(10);
});

test('Create test has extras name', () => {
    const pick = new Pick({numbers: [1,2,3,4,5], extras: {extra: {number: 10, name: 'the extra'}}});

    expect(pick.extras().extra.name).toBe('the extra');
});

