import 'i18next';
import { defaultNS, resources } from '.';

type PluginResources = {
  readonly translation: {
    readonly plugins: {
      readonly [pluginName: string]: {
        readonly [key: string]: string;
      };
    };
  };
};

type EnglishResources = (typeof resources)['en'];

type Resources = EnglishResources & PluginResources;

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: Resources;
    returnNull: false;
    keySeparator: '.';
    nsSeparator: ':';
    strictKeyChecks: true;
  }
}
