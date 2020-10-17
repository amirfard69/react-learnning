export const textActionTitleAA = 'TESTACTIONAA';
export const textActionTitle2AA = 'TESTACTION2AA';
export const textActionTitle3AA = 'TESTACTION3AA';
export const testActionAA = () => ({
    type: textActionTitleAA
});
export const testAction2AA = () => ({
    type: textActionTitle2AA
});
export const testAction3AA = (value) => ({
    type: textActionTitle3AA,
    value: value,
});