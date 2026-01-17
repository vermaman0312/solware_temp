'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { lightTheme, darkTheme } from './theme';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    // Simple state for theme toggling, default to dark as requested 'dynamic color rakhna dark aur light'
    // In a real app we might use context or system preference.
    // For now, I will default to dark mode or provide a mechanism. 
    // User asked for "dynamic color rakhna dark aur light".
    // I'll assume they want to be able to switch.

    const [mode, setMode] = React.useState<'light' | 'dark'>('dark');

    const theme = React.useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}
