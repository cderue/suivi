import { NextFederationPlugin } from '@module-federation/nextjs-mf';

export default {
    output: 'export',
    webpack: (config, options) => {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'suivi',
                filename: 'static/runtime/remoteEntry.js',
                exposes: {
                    './SuiviProjet': './src/components/SuiviProjet.tsx',
                    './SuiviProduit': './src/components/suivi-produit/index.tsx',
                    './ListeProjets': './src/components/liste-projets/index.tsx',
                }
            })
        );
        return config;
    }
}
