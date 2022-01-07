const Link = ({ href, className, children }) => {
  const onClick = (e) => {
    if (e.metakey || e.ctrlkey) {
      return;
    }
    e.preventDefault();
    window.history.pushState({}, "", href);
    const NavEvent = new PopStateEvent("popstate");
    window.dispatchEvent(NavEvent);
  };
  return (
    <a onClick={onClick} href={href} className={className}>
      {children}
    </a>
  );
};
export default Link;
