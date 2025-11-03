const Covers = () => {
  return (
    <div className="h-screen relative overflow-hidden">
      {/* Split Background - 1/3 left, 2/3 right */}
      <div className="absolute inset-0 flex">
        {/* Left 1/3 - Darker gradient */}
        <div 
          className="w-1/3"
          style={{
            background: 'linear-gradient(135deg, #5A1FD8 0%, #6C2AFD 100%)'
          }}
        />
        {/* Right 2/3 - Lighter gradient */}
        <div 
          className="w-2/3"
          style={{
            background: 'linear-gradient(135deg, #6C2AFD 0%, #835BD9 100%)'
          }}
        />
      </div>

      {/* Animated Background Shapes - Mobile Only */}
      <div className="lg:hidden absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating blob 1 */}
        <div 
          className="absolute w-64 h-64 rounded-full blur-2xl opacity-40"
          style={{
            background: 'radial-gradient(circle, #9B6FFF 0%, transparent 60%)',
            top: '15%',
            left: '-20%',
            animation: 'float1 8s ease-in-out infinite'
          }}
        />
        
        {/* Floating blob 2 */}
        <div 
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, #E5DEFF 0%, transparent 70%)',
            bottom: '10%',
            right: '-25%',
            animation: 'float2 10s ease-in-out infinite'
          }}
        />
        
        {/* Floating blob 3 */}
        <div 
          className="absolute w-72 h-72 rounded-full blur-2xl opacity-25"
          style={{
            background: 'radial-gradient(circle, #D4BEFF 0%, transparent 65%)',
            top: '40%',
            right: '10%',
            animation: 'float3 12s ease-in-out infinite'
          }}
        />
      </div>

      {/* Animated Background Shapes - Desktop Only */}
      <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large blob 1 - Top left */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-40"
          style={{
            background: 'radial-gradient(circle, #9B6FFF 0%, transparent 60%)',
            top: '-15%',
            left: '-10%',
            animation: 'float1 15s ease-in-out infinite'
          }}
        />
        
        {/* Large blob 2 - Bottom right */}
        <div 
          className="absolute w-[700px] h-[700px] rounded-full blur-3xl opacity-35"
          style={{
            background: 'radial-gradient(circle, #E5DEFF 0%, transparent 70%)',
            bottom: '-20%',
            right: '-15%',
            animation: 'float2 18s ease-in-out infinite'
          }}
        />
        
        {/* Large blob 3 - Center right */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, #D4BEFF 0%, transparent 65%)',
            top: '25%',
            right: '5%',
            animation: 'float3 20s ease-in-out infinite'
          }}
        />
        
        {/* Large blob 4 - Center left */}
        <div 
          className="absolute w-[550px] h-[550px] rounded-full blur-3xl opacity-25"
          style={{
            background: 'radial-gradient(circle, #C8A9FF 0%, transparent 60%)',
            top: '50%',
            left: '10%',
            animation: 'float1 22s ease-in-out infinite reverse'
          }}
        />
      </div>

      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 30px) scale(1.15); }
          66% { transform: translate(30px, -25px) scale(0.85); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(25px, 35px) scale(0.9); }
          66% { transform: translate(-35px, -20px) scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default Covers;
