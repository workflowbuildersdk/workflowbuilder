import styles from './sales-contact.module.css';
import imageUrl from '@/assets/ruslana.jpeg';
import { Avatar, IconLabelButton } from '@synergycodes/axiom';
import clsx from 'clsx';
import { LinkedinLogo, PaperPlaneRight } from '@phosphor-icons/react';

const salesDetails = {
  name: 'Ruslana Brykaliuk',
  imageUrl,
  position: 'Sales Development Representative',
  email: 'ruslana.brykaliuk@synergycodes.com',
  linkedInUrl: 'https://www.linkedin.com/in/ruslana-b-970016135/',
};

export function SalesContact() {
  const { name, position, imageUrl, email, linkedInUrl } = salesDetails;
  function handleLinkedInClick() {
    window.open(`${linkedInUrl}`, '_blank');
  }

  function handleEmailClick() {
    globalThis.location.href = `mailto:${email}`;
  }

  return (
    <div className={styles['container']}>
      <div className={styles['details-container']}>
        <Avatar username={name} imageUrl={imageUrl} />
        <div className={styles['details']}>
          <span className="ax-public-h10">{name}</span>
          <span className={clsx('ax-public-p11', styles['position'])}>{position}</span>
        </div>
      </div>
      <div className={styles['buttons']}>
        <IconLabelButton size="medium" variant="secondary" onClick={handleLinkedInClick}>
          <LinkedinLogo />
          LinkedIn
        </IconLabelButton>
        <IconLabelButton size="medium" variant="secondary" onClick={handleEmailClick}>
          <PaperPlaneRight />
          Email
        </IconLabelButton>
      </div>
    </div>
  );
}
