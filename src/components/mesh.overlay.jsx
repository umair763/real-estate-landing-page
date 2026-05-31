export const MeshOverlay = ({ className = "", opacity = 0.1 }) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, ${opacity}) 1.5px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, ${opacity})1.5px, transparent 1px)
        `,
        backgroundSize: '200px 200px'
      }}
    />
  );
};
