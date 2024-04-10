export type TTokensContext = {
    tokens: number | null;
};

export type TTokensActionsContext = {
    decreaseTokens: (val: number) => void;
};
