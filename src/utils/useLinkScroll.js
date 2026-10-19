 const useLinkScroll=(e,surf)=> {
    e.preventDefault();

    document.getElementById(surf)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

export default useLinkScroll;  