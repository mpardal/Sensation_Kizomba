import type { IframeHTMLAttributes } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@mui/material';
import { useIntersectionObserver } from 'usehooks-ts';

function OptimizedIframe({
  title,
  ...props
}: IframeHTMLAttributes<HTMLIFrameElement>) {
  const articleRef = useRef<HTMLElement | null>(null);
  const entry = useIntersectionObserver(articleRef, {
    rootMargin: '200px',
  });
  const [showIframe, setShowIframe] = useState(false);
  const isIntersecting = Boolean(entry?.isIntersecting);

  useEffect(() => {
    if (isIntersecting && !showIframe) {
      setShowIframe(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersecting]);

  return (
    <>
      {showIframe ? (
        <iframe {...props} title={title} />
      ) : (
        <article
          className="w-full h-[500px] flex items-center justify-center"
          ref={articleRef}
        >
          <Button
            onClick={() => setShowIframe(true)}
            size="large"
            variant="contained"
          >
            {title}
          </Button>
        </article>
      )}
    </>
  );
}

export default OptimizedIframe;
