export const textActionTitle = 'TESTACTION';
export const textActionTitle2 = 'TESTACTION2';
export const textActionTitle3 = 'TESTACTION3';
export const testAction = () => ({
    type: textActionTitle
});
export const testAction2 = () => ({
    type: textActionTitle2
});
export const testAction3 = (value) => ({
    type: textActionTitle3,
    value: value,
});