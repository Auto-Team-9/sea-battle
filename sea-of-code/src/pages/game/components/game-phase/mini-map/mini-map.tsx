const MiniMap = ({ miniMapRef }: { miniMapRef: React.RefObject<HTMLDivElement> }) => {
  return (
    <div className='self-end' id='mini-map' ref={miniMapRef}>
      test
    </div>
  );
};

export default MiniMap;
