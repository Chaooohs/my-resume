import { useEffect } from "react";

export const hideHeader = () => {
    useEffect(() => {
      let lastScroll = 0
      const defaultOffset = 10;
      const header = document.querySelector('.header');
    
      const scrollPosition = () => window.pageYOffset
      const containHide = () => header.classList.contains('hide');
    
      window.addEventListener("scroll", () => {
    
        if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
          header.classList.add('hide');
        }
        else if (scrollPosition() < lastScroll && containHide() ) {
          header.classList.remove('hide');
        }
    
        lastScroll = scrollPosition()
    
      });
    }, []);
}
