import { useContext } from 'react';
import { context, actionsContext } from '../model';

export const useTokens = () => useContext(context);
export const useTokensActions = () => useContext(actionsContext);
