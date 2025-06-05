import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export function useTranslateIfPossible() {
  const { t, i18n } = useTranslation();

  const translateIfPossible = useCallback(
    (value = '') => {
      if (value && i18n.exists(value)) {
        /* @ts-expect-error translation from variable */
        return t(value) as string;
      }

      return;
    },
    [i18n, t],
  );

  return translateIfPossible;
}
