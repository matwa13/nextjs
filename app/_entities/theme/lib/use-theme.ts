import { useContext } from 'react';
import { context } from '../model';

export const useTheme = () => useContext(context);
