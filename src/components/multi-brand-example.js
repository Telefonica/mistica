import * as React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {ThemeContextProvider} from '@telefonica/mistica';

const themes = {
    Movistar: {
        i18n: {locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES'},
        skin: 'Movistar',
    },
    
    O2: {
        i18n: {locale: 'en-US', phoneNumberFormattingRegionCode: 'GB'},
        skin: 'O2',
    },
    
    'O2 Classic': {
        i18n: {locale: 'en-US', phoneNumberFormattingRegionCode: 'GB'},
        skin: 'O2-classic',
    },
    
    Vivo: {
        i18n: {locale: 'pt-BR', phoneNumberFormattingRegionCode: 'BR'},
        skin: 'Vivo',
    },
}

const MultiBrandExample = ({children}) => (
    <Tabs
        defaultValue="Movistar"
        values={Object.keys(themes).map((themeLabel) => ({label: themeLabel, value: themeLabel}))}
    >
        {Object.entries(themes).map(([themeLabel, theme]) =>
            <TabItem value={themeLabel}>
                <ThemeContextProvider theme={theme}>
                    {children}
                </ThemeContextProvider>
            </TabItem>
        )}
    </Tabs>
);

export default MultiBrandExample;