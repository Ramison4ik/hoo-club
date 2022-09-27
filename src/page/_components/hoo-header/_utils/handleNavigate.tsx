import {SyntheticEvent} from "react";

export const pageNavigate =
    (event: SyntheticEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      event.stopPropagation();
      const element = event.currentTarget.getAttribute('href');
      const destinationElement = document.querySelector(
          element,
      ) as HTMLDivElement;
      if (typeof window !== 'undefined' && destinationElement) {
        window.scrollTo({
          behavior: 'smooth',
          top: destinationElement.offsetTop,
        });
      }
      if (destinationElement === null) {
        window.location.href = `/${element}`
      }
    };
