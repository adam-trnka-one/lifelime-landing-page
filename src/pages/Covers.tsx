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

      {/* White Animated Wave Section - Desktop Only */}
      <svg
        className="hidden lg:block absolute top-0 left-[-10%] w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Wave Layer 1 - Background */}
        <path
          d="M0,0 L40,0 Q45,25 50,50 T60,100 L0,100 Z"
          fill="white"
          opacity="0.4"
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="
              M0,0 L40,0 Q45,25 50,50 T60,100 L0,100 Z;
              M0,0 L42,0 Q47,23 52,48 T62,100 L0,100 Z;
              M0,0 L40,0 Q45,25 50,50 T60,100 L0,100 Z
            "
          />
        </path>
        
        {/* Wave Layer 2 - Middle */}
        <path
          d="M0,0 L42,0 Q47,27 52,52 T62,100 L0,100 Z"
          fill="white"
          opacity="0.7"
        >
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="
              M0,0 L42,0 Q47,27 52,52 T62,100 L0,100 Z;
              M0,0 L40,0 Q45,30 50,55 T60,100 L0,100 Z;
              M0,0 L42,0 Q47,27 52,52 T62,100 L0,100 Z
            "
          />
        </path>
        
        {/* Wave Layer 3 - Front */}
        <path
          d="M0,0 L44,0 Q49,30 54,55 T64,100 L0,100 Z"
          fill="white"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,0 L44,0 Q49,30 54,55 T64,100 L0,100 Z;
              M0,0 L46,0 Q51,28 56,53 T66,100 L0,100 Z;
              M0,0 L44,0 Q49,30 54,55 T64,100 L0,100 Z
            "
          />
        </path>
        
        {/* Second Layer - Wave 1 with Lower Opacity */}
        <path
          d="M0,0 L46,0 Q51,32 56,57 T66,100 L0,100 Z"
          fill="white"
          opacity="0.2"
        >
          <animate
            attributeName="d"
            dur="12s"
            repeatCount="indefinite"
            values="
              M0,0 L46,0 Q51,32 56,57 T66,100 L0,100 Z;
              M0,0 L48,0 Q53,35 58,60 T68,100 L0,100 Z;
              M0,0 L46,0 Q51,32 56,57 T66,100 L0,100 Z
            "
          />
        </path>
        
        {/* Second Layer - Wave 2 with Lower Opacity */}
        <path
          d="M0,0 L48,0 Q53,35 58,60 T68,100 L0,100 Z"
          fill="white"
          opacity="0.15"
        >
          <animate
            attributeName="d"
            dur="9s"
            repeatCount="indefinite"
            values="
              M0,0 L48,0 Q53,35 58,60 T68,100 L0,100 Z;
              M0,0 L50,0 Q55,33 60,58 T70,100 L0,100 Z;
              M0,0 L48,0 Q53,35 58,60 T68,100 L0,100 Z
            "
          />
        </path>
        
        {/* Third Layer - Wave 1 with Lower Opacity */}
        <path
          d="M0,0 L50,0 Q55,38 60,63 T70,100 L0,100 Z"
          fill="white"
          opacity="0.12"
        >
          <animate
            attributeName="d"
            dur="11s"
            repeatCount="indefinite"
            values="
              M0,0 L50,0 Q55,38 60,63 T70,100 L0,100 Z;
              M0,0 L52,0 Q57,36 62,61 T72,100 L0,100 Z;
              M0,0 L50,0 Q55,38 60,63 T70,100 L0,100 Z
            "
          />
        </path>
        
        {/* Third Layer - Wave 2 with Lower Opacity */}
        <path
          d="M0,0 L52,0 Q57,40 62,65 T72,100 L0,100 Z"
          fill="white"
          opacity="0.1"
        >
          <animate
            attributeName="d"
            dur="13s"
            repeatCount="indefinite"
            values="
              M0,0 L52,0 Q57,40 62,65 T72,100 L0,100 Z;
              M0,0 L54,0 Q59,38 64,63 T74,100 L0,100 Z;
              M0,0 L52,0 Q57,40 62,65 T72,100 L0,100 Z
            "
          />
        </path>
      </svg>

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
