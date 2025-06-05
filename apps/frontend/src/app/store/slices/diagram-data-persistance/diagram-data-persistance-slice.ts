import { StatusType } from '@workflow-builder/types/common';
import { GetDiagramState, SetDiagramState } from '@/store/store';
import { saveDiagram } from './save-diagram';
import { loadDiagram } from './load-diagram';

export type DiagramDataPersistanceState = {
  loadDiagramStatus: StatusType;
  saveDiagram: (showNotification?: boolean) => void;
  loadDiagram: () => void;
};

export function useDiagramDataPersistanceSlice(set: SetDiagramState, get: GetDiagramState) {
  return {
    loadDiagramStatus: StatusType.Idle,
    saveDiagram: saveDiagram(get),
    loadDiagram: loadDiagram(set, get),
  };
}
