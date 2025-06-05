import { HandleType, Position } from '@xyflow/react';
import { LayoutDirection } from '@workflow-builder/types/common';

const DETACHED_HANDLE_MARKER = 'detached';

export function getAttachedHandle(handle: string | null) {
  return handle ? handle.replace(DETACHED_HANDLE_MARKER, '') : handle;
}

export function getHandleType(position: Position): HandleType {
  return position === Position.Top || position === Position.Left ? 'target' : 'source';
}

export function getHandleSourcePosition(direction: LayoutDirection): Position {
  return direction == 'RIGHT' ? Position.Right : Position.Bottom;
}

export function getHandleTargetPosition(direction: LayoutDirection): Position {
  return direction == 'RIGHT' ? Position.Left : Position.Top;
}

export function getHandleSourceId(nodeId: string) {
  return `${nodeId}-source`;
}

export function getHandleTargetId(nodeId: string) {
  return `${nodeId}-target`;
}
