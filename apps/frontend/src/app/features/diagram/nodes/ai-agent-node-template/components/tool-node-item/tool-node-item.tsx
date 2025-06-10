import styles from './tool-node-item.module.css';
import { PropsWithChildren } from 'react';

type Props = {
  label: string;
};

export function ToolNodeItem({ label, children }: PropsWithChildren<Props>) {
  return (
    <div className={styles['container']}>
      {label}
      <div className={styles['handle-container']}>{children}</div>
    </div>
  );
}
