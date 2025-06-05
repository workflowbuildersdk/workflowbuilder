import styles from './app.module.css';
import { AppBarContainer } from './features/app-bar/app-bar-container';
import { AppLoaderContainer } from './features/app-loader/app-loader-container';
import { DiagramContainer as Diagram } from './features/diagram/diagram';
import { PaletteContainer } from './features/palette/palette-container';
import { PropertiesBarContainer } from './features/properties-bar/properties-bar-container';
import { ReactFlowProvider } from '@xyflow/react';
import { ZoomProvider } from './providers/zoom-provider';
import { UndoRedoProvider } from './providers/undo-redo-provider';
import { MousePositionProvider } from './providers/mouse-position-provider';
import { DiagramWrapper } from './features/diagram/diagram-wrapper';
import { SnackbarContainer } from './features/snackbar/snackbar-container';
import { ModalProvider } from './features/modals/modal-provider';

import '@/features/plugins/index';
import { useDetectLanguageChange } from './i18n/use-detect-language-change';

export function App() {
  useDetectLanguageChange();

  return (
    <ReactFlowProvider>
      <ZoomProvider>
        <UndoRedoProvider>
          <MousePositionProvider>
            <ModalProvider>
              <div className={styles['container']}>
                <div className={styles['header']}>
                  <AppBarContainer />
                </div>

                <div className={styles['content']}>
                  <div className={styles['panel']}>
                    <PaletteContainer />
                  </div>
                  <div className={styles['panel']}>
                    <div className={styles['right-panel']}>
                      <PropertiesBarContainer />
                    </div>
                  </div>
                </div>
                <DiagramWrapper>
                  <Diagram />
                </DiagramWrapper>
                <SnackbarContainer />
                <AppLoaderContainer />
              </div>
            </ModalProvider>
          </MousePositionProvider>
        </UndoRedoProvider>
      </ZoomProvider>
    </ReactFlowProvider>
  );
}
