import { useEffect, useRef, useState } from 'react';
import { VIDEO_URL, VIDEO_THUMB } from '../../data/content';
import SectionHeader from '../SectionHeader';

export default function VideoSection() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const trigger = triggerRef.current;
    return () => {
      document.removeEventListener('keydown', onKey);
      trigger?.focus();
    };
  }, [open]);

  return (
    <section className="section" id="video">
      <div className="container split">
        <SectionHeader title="Watch Now" />
        <button
          ref={triggerRef}
          type="button"
          className="video-thumb"
          style={{ backgroundImage: `url(${VIDEO_THUMB})` }}
          aria-label="Play the ePocketShop video"
          onClick={() => setOpen(true)}
        >
          <span className="play" aria-hidden="true">
            <i className="fas fa-play" />
          </span>
        </button>
      </div>

      {open && (
        <div
          className="video-popup"
          role="dialog"
          aria-modal="true"
          aria-label="ePocketShop video"
          onClick={(e) => {
            // Click anywhere outside the player closes it (unmounting the iframe stops playback).
            if (e.target.tagName !== 'IFRAME') setOpen(false);
          }}
        >
          <div className="video-src">
            <div className="iframe-src">
              <iframe
                src={VIDEO_URL}
                title="ePocketShop video"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
